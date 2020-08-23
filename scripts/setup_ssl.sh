# TODO 
# - convert this into a post deploy shell script
# - switch to domain provider that has API for modifying DNS
# - clean up when you have time
# - set up param for switching between stage and prod letsencrypt instance

#!/bin/sh

# set up path vars for cleaner script execution
export D=/usr/share/nginx/html
export SSL_PATH=/etc/nginx/ssl

# get acme.sh client to automate authentication with LetsEncrypt
git clone https://github.com/Neilpang/acme.sh.git
cd acme.sh/ && ./acme.sh --install

# set up directories for acme challenge. you have to modify your domain provider's TXT record in order for CA to validate cert
mkdir -vp ${D}/.well-known/acme-challenge/
chown -R nginx:nginx ${D}/.well-known/acme-challenge/
chmod -R 0555 ${D}/.well-known/acme-challenge/
mkdir -p ${SSL_PATH}/letsencrypt/shahsyed.com/
mkdir -p ${SSL_PATH}/letsencrypt/www.shahsyed.com/

# generate the certs
cd ${SSL_PATH}/letsencrypt/shahsyed.com/ && openssl dhparam -dsaparam -out dhparams.pem 4096
cd ${SSL_PATH}/letsencrypt/www.shahsyed.com/ && openssl dhparam -dsaparam -out dhparams.pem 4096

# test issue the certs, then copy ssl related configuration for nginx over to the server
#cd /acme.sh/ && ./acme.sh --test --issue --dns -d shahsyed.com -w $D -k 4096 --yes-I-know-dns-manual-mode-enough-go-ahead-please
#cd /acme.sh/ && ./acme.sh --test --issue --dns -d www.shahsyed.com -w $D -k 4096 --yes-I-know-dns-manual-mode-enough-go-ahead-please
#cd /acme.sh/ && ./acme.sh --test --renew --dns -d shahsyed.com -w $D -k 4096 --yes-I-know-dns-manual-mode-enough-go-ahead-please
#cd /acme.sh/ && ./acme.sh --test --renew --dns -d www.shahsyed.com -w $D -k 4096 --yes-I-know-dns-manual-mode-enough-go-ahead-please
cd /acme.sh/ && ./acme.sh --issue --dns -d shahsyed.com -w $D -k 4096 --yes-I-know-dns-manual-mode-enough-go-ahead-please
cd /acme.sh/ && ./acme.sh --issue --dns -d www.shahsyed.com -w $D -k 4096 --yes-I-know-dns-manual-mode-enough-go-ahead-please
# TODO - automate this section to update the txt record by getting a new domain provider
cd /acme.sh/ && ./acme.sh --renew -d shahsyed.com -w $D -k 4096 --yes-I-know-dns-manual-mode-enough-go-ahead-please
cd /acme.sh/ && ./acme.sh --renew -d www.shahsyed.com -w $D -k 4096 --yes-I-know-dns-manual-mode-enough-go-ahead-please
echo 'warning - github implements cache-control on init requests. have to wait until TTL expires before you can pull new version of this file'
cd /etc/nginx/conf.d && wget https://raw.githubusercontent.com/shahdeys/website/feature/ssl/nginx.conf.d/ssl.shahsyed.conf
# final step, install certs for the website domain and restart nginx
cd /acme.sh && ./acme.sh --installcert -d shahsyed.com --key-file ${SSL_PATH}/letsencrypt/shahsyed.com/shahsyed.com.key --fullchain-file ${SSL_PATH}/letsencrypt/shahsyed.com/shahsyed.com.cer --reloadcmd "nginx -s reload"
cd /acme.sh && ./acme.sh --installcert -d www.shahsyed.com --key-file ${SSL_PATH}/letsencrypt/www.shahsyed.com/www.shahsyed.com.key --fullchain-file ${SSL_PATH}/letsencrypt/www.shahsyed.com/www.shahsyed.com.cer --reloadcmd "nginx -s reload"

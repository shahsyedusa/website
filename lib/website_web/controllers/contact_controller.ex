defmodule WebsiteWeb.ContactController do
  use WebsiteWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html", title: "Contact")
  end
end

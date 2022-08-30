defmodule WebsiteWeb.BlogController do
  use WebsiteWeb, :controller

  alias Website.Blog

  def index(conn, _params) do
    render(conn, "index.html", posts: Blog.all_posts(), title: "Blog")
  end

  def show(conn, %{"id" => id}) do
    post = Blog.get_post_by_id!(id)
    render(conn, "show.html", post: post, title: post.title)
  end
end

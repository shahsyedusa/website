defmodule WebsiteWeb.PageController do
  use WebsiteWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html", title: "Staff Software Engineer")
  end
end

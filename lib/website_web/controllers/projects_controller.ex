defmodule WebsiteWeb.ProjectsController do
  use WebsiteWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html", title: "Projects")
  end

  def bachao(conn, _params) do
    render(conn, "bachao.html", title: "Bachao")
  end

  def portfolio(conn, _params) do
    render(conn, "portfolio.html", title: "Portfolio")
  end
end

defmodule WebsiteWeb.ProjectsController do
  use WebsiteWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end

  def bachao(conn, _params) do
    render(conn, "bachao.html")
  end

  def pythia(conn, _params) do
    render(conn, "pythia.html")
  end
end

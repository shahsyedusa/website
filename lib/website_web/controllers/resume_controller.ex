defmodule WebsiteWeb.ResumeController do
  use WebsiteWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html", title: "Resume")
  end
end

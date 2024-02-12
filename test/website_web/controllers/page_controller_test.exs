defmodule WebsiteWeb.PageControllerTest do
  use WebsiteWeb.ConnCase, async: true

  test "should get index", %{conn: conn} do
    conn =
      conn
      |> get(Routes.page_path(conn, :index))

    html_response(conn, 200)
    |> assert_html("title", "Shah Syed · Lead Software Engineer")
    |> assert_html("a[href='/blog']", count: 1)
    |> assert_html("a[href='/resume']", count: 1)
    |> assert_html("a[href='/projects/bachao']", count: 1)
    |> assert_html("a[href='/projects/portfolio']", count: 1)
    |> assert_html("a[href='/contact']", count: 1)
    |> assert_html("a", min: 1)
    |> assert_html("a", max: 8)
  end
end

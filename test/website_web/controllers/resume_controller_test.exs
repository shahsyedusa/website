defmodule WebsiteWeb.ResumeControllerTest do
  use WebsiteWeb.ConnCase, async: true

  test "should get resume", %{conn: conn} do
    conn = get(conn, "/resume")

    html_response(conn, 200)
    |> assert_html("title", "Shah Syed · Resume")
    |> assert_html("a[href='/blog']", count: 1)
    |> assert_html("a[href='/resume']", count: 1)
    |> assert_html("a[href='/projects/bachao']", count: 1)
    |> assert_html("a[href='/projects/portfolio']", count: 1)
    |> assert_html("a[href='/contact']", count: 1)
    |> assert_html("a", min: 1)
    |> assert_html("a", max: 9)
  end
end

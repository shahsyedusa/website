defmodule WebsiteWeb.ContactControllerTest do
  use WebsiteWeb.ConnCase, async: true

  test "should get contact", %{conn: conn} do
    conn = get(conn, "/contact")

    html_response(conn, 200)
    |> assert_html("title", "Shah Syed · Contact")
    |> assert_html("a[href='/blog']", count: 1)
    |> assert_html("a[href='/resume']", count: 1)
    |> assert_html("a[href='/projects/bachao']", count: 1)
    |> assert_html("a[href='/projects/pythia']", count: 1)
    |> assert_html("a[href='/contact']", count: 1)
    |> assert_html("a", min: 1)
    |> assert_html("a", max: 8)
  end
end

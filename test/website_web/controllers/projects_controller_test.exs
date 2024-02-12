defmodule WebsiteWeb.ProjectsControllerTest do
  use WebsiteWeb.ConnCase, async: true

  test "should get projects", %{conn: conn} do
    conn = get(conn, "/projects")

    html_response(conn, 200)
    |> assert_html("title", "Shah Syed · Projects")
    |> assert_html("a[href='/blog']", count: 1)
    |> assert_html("a[href='/resume']", count: 1)
    |> assert_html("a[href='/projects/bachao']", count: 2)
    |> assert_html("a[href='/projects/portfolio']", count: 1)
    |> assert_html("a[href='/contact']", count: 1)
    |> assert_html("a", min: 2)
    |> assert_html("a", max: 10)
  end

  test "should get bachao", %{conn: conn} do
    conn = get(conn, "/projects/bachao")

    html_response(conn, 200)
    |> assert_html("title", "Shah Syed · Bachao")
    |> assert_html("a[href='/blog']", count: 1)
    |> assert_html("a[href='/resume']", count: 1)
    |> assert_html("a[href='/projects/bachao']", count: 1)
    |> assert_html("a[href='/projects/portfolio']", count: 1)
    |> assert_html("a[href='/contact']", count: 1)
    |> assert_html("a", min: 2)
    |> assert_html("a", max: 10)
  end

  test "should get portfolio", %{conn: conn} do
    conn = get(conn, "/projects/portfolio")

    html_response(conn, 200)
    |> assert_html("title", "Shah Syed · Portfolio")
    |> assert_html("a[href='/blog']", count: 1)
    |> assert_html("a[href='/resume']", count: 1)
    |> assert_html("a[href='/projects/bachao']", count: 1)
    |> assert_html("a[href='/projects/portfolio']", count: 1)
    |> assert_html("a[href='/contact']", count: 1)
    |> assert_html("a", min: 2)
    |> assert_html("a", max: 10)
  end
end

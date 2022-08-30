defmodule WebsiteWeb.ErrorBlogViewTest do
  use WebsiteWeb.ConnCase, async: true
  alias Website.Blog.Post
  import Website.Blog

  use NimblePublisher,
    build: Post,
    from: Application.app_dir(:website, "priv/static/posts/**/*.md"),
    as: :posts,
    highlighters: [:makeup_elixir, :makeup_erlang]

  test "should raise exception when finding missing blog", %{conn: conn} do
    assert_raise Website.Blog.NotFoundError, fn ->
      conn = get(conn, "/blog/test")
      html_response(conn, 404)
    end
  end

  test "should not find any posts with fail tag" do
    assert_raise Website.Blog.NotFoundError, fn ->
      get_posts_by_tag!("fail")
    end
  end

  test "should find a post with test tag" do
    assert length(get_posts_by_tag!("hello")) == 1
  end

  test "should find recent posts" do
    assert length(recent_posts(5)) >= 1
  end
end

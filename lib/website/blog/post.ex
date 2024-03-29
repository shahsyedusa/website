defmodule Website.Blog.Post do
  @enforce_keys [:id, :title, :body, :description, :published, :tags, :date]
  defstruct [:id, :author, :title, :body, :description, :published, :tags, :date, :full_date]

  def build(filename, attrs, body) do
    [year, month_day_id] =
      filename
      |> Path.rootname()
      |> Path.split()
      |> Enum.take(-2)

    [month, day, id] = String.split(month_day_id, "-", parts: 3)
    date = Date.from_iso8601!("#{year}-#{month}-#{day}")
    full_date = Calendar.strftime(date, "%A %B %d, %Y")

    struct!(
      __MODULE__,
      [id: id, date: date, full_date: full_date, body: body] ++ Map.to_list(attrs)
    )
  end
end

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PhotoCard from "./PhotoCard";

const photo = {
  albumId: 1,
  id: 1,
  title: "Test Photo",
  url: "https://example.com/photo.jpg",
  thumbnailUrl: "https://example.com/thumb.jpg",
};

describe("PhotoCard", () => {
  it("renders image", () => {
    render(<PhotoCard photo={photo} onClick={vi.fn()} />);

    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("calls onClick when clicked", async () => {
    const user = userEvent.setup();

    const onClick = vi.fn();

    render(<PhotoCard photo={photo} onClick={onClick} />);

    await user.click(screen.getByRole("button"));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

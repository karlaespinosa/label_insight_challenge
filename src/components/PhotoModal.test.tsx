import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PhotoModal from "./PhotoModal";

const photo = {
  albumId: 1,
  id: 1,
  title: "Test Photo",
  url: "https://example.com/photo.jpg",
  thumbnailUrl: "https://example.com/thumb.jpg",
};

describe("PhotoModal", () => {
  it("shows Add Description when there is no description", () => {
    render(
      <PhotoModal
        photo={photo}
        description=""
        onClose={vi.fn()}
        onDescriptionChange={vi.fn()}
        onSave={vi.fn()}
      />,
    );

    expect(
      screen.getByRole("button", {
        name: /add description/i,
      }),
    ).toBeInTheDocument();
  });

  it("shows Edit Description when description exists", () => {
    render(
      <PhotoModal
        photo={photo}
        description="My description"
        onClose={vi.fn()}
        onDescriptionChange={vi.fn()}
        onSave={vi.fn()}
      />,
    );

    expect(
      screen.getByRole("button", {
        name: /edit description/i,
      }),
    ).toBeInTheDocument();
  });

  it("switches to editing mode", async () => {
    const user = userEvent.setup();

    render(
      <PhotoModal
        photo={photo}
        description=""
        onClose={vi.fn()}
        onDescriptionChange={vi.fn()}
        onSave={vi.fn()}
      />,
    );

    await user.click(
      screen.getByRole("button", {
        name: /add description/i,
      }),
    );

    expect(screen.getByRole("textbox")).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /save description/i,
      }),
    ).toBeInTheDocument();
  });

  it("calls onSave when save button is clicked", async () => {
    const user = userEvent.setup();

    const onSave = vi.fn();

    render(
      <PhotoModal
        photo={photo}
        description=""
        onClose={vi.fn()}
        onDescriptionChange={vi.fn()}
        onSave={onSave}
      />,
    );

    await user.click(
      screen.getByRole("button", {
        name: /add description/i,
      }),
    );

    await user.click(
      screen.getByRole("button", {
        name: /save description/i,
      }),
    );

    expect(onSave).toHaveBeenCalledTimes(1);
  });
});

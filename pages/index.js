import GridGallery from "../components/grid-gallery";

export default function Index() {
  const images = [
    "./mountains.jpg",
    "./mountains.jpg",
    "./mountains.jpg",
    "./mountains.jpg",
    "./mountains.jpg",
    "./mountains.jpg",
    "./mountains.jpg",
    "./mountains.jpg",
    "./mountains.jpg",
    "./mountains.jpg",
    "./mountains.jpg",
    "./mountains.jpg",
    "./mountains.jpg",
    "./mountains.jpg"
  ];

  return (
    <>
      <GridGallery images={images} />
    </>
  );
}

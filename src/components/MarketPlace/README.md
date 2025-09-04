# Colors and styles:

- Facebook-Blue: #1877F2
- Facebook-Icon-Gray: #77797C
- Facebook-Body-Gray: #9FA1A4
- Facebook-White: #FEFEFE
- Facebook-Green: #65b543

# Installations needed

```sh
npm install react-router-dom
```

Font is downloaded in Public. Example of how to import Font Import example below:

```sh
@font-face {
  font-family: "Afacad Flux";
  src: url("/public/assets/Afacad_Flux/static/AfacadFlux-Medium.ttf")
    format("truetype");
  font-weight: 400;
  font-style: normal;
```

Example of how to implement ListingDetails with Market Main page:

```sh
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Marketplace />} />
        <Route path="/details/:id" element={<ListingDetails />} />
      </Routes>
    </Router>
  );
};
```

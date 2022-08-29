import React from "react";
import "./App.css";

function App() {
  // return React.createElement("h1", {}, "Hello World");  We can also write like this
  // <h4>Hello</h4>;

  const Person = () => <h2>Hello World</h2>;
  // If we write inside {} than we have to return it
  const Message = () => {
    return <p>How are You???</p>;
  };

  // for small quantity we can define each book separately but if we thousands of book that what??? so we have to use map method and for that we have to make an array of object
  // const firstBook = {
  //   img: "https://images-na.ssl-images-amazon.com/images/I/41B2C2Frv5L._SX322_BO1,204,203,200_.jpg",
  //   title: "lets go to chilhood",
  //   author: "asha chitroda",
  // };

  // const secondBook = {
  //   img: "https://images-eu.ssl-images-amazon.com/images/I/41LD2VhDn8L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
  //   title: "War Book",
  //   author: "ravi chitroda",
  // };

  const books = [
    {
      img: "https://images-na.ssl-images-amazon.com/images/I/41B2C2Frv5L._SX322_BO1,204,203,200_.jpg",
      title: "lets go to chilhood",
      author: "asha chitroda",
    },
    {
      img: "https://images-eu.ssl-images-amazon.com/images/I/41LD2VhDn8L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
      title: "War Book",
      author: "ravi chitroda",
    },
  ];

  // const Book = (props) => {       //here we can write either props or can direct pass key or properties into this like {img, title, author} this is called destructuring
  const Book = ({ img, title, author, children }) => {
    // console.log("first Props", props);
    // const title = () => <h2>Wuthering Heights</h2>;
    // const title = "Love you like you do";
    // const author = "ravi chitroda";
    // const img =
    //   "https://m.media-amazon.com/images/I/81j8i9slKIL._AC_UY327_FMwebp_QL65_.jpg";

    // return <article>This is Book</article>;

    return (
      <div>
        {/* <img
          src="https://m.media-amazon.com/images/I/81j8i9slKIL._AC_UY327_FMwebp_QL65_.jpg"
          alt=""
        /> */}

        {/* <img src={props.img} alt="book" />
        <h1>{props.title}</h1>
        <h3>{props.author.toLocaleUpperCase()}</h3> */}

        {/* if we destructuring props as on line 27 of const Book than we don't need to write props.img we just write img as props has now destructured */}
        <img src={img} alt="book" />
        <h1>{title}</h1>
        <h3>{author.toLocaleUpperCase()}</h3>
        {/* {children}   for children of props we have to pass children compulsory */}
        {children}
        {/* {props.type}
        {props.price} */}
        {/* {console.log("second Props", props)} */}
      </div>
    );
  };

  // const Image = () => {
  //   return (
  //     <img
  //       src="https://m.media-amazon.com/images/I/81j8i9slKIL._AC_UY327_FMwebp_QL65_.jpg"
  //       alt=""
  //     />
  //   );
  // };

  // const title = () => <h2>Wuthering Heights</h2>;   //We can also write here and also can be write inside the function

  return (
    <div>
      <Person />
      <h2>Hello There</h2>
      <ul>
        <li>
          <a href="#">Hello Everyone</a>
        </li>
        <Message />
      </ul>
      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        {/* here we use map method so we removes separately render book and will be useing map method */}
        {books.map((book) => {
          const { img, title, author } = book;
          return <Book book={book}></Book>;
        })}

        {/* <Book
          img={firstBook.img}
          title={firstBook.title}
          author={firstBook.author}
        >
          <p>lorem sale price amazon </p>
        </Book>
        <Book
          img={secondBook.img}
          title={secondBook.title}
          author={secondBook.author}
        /> */}
        {/* <Image />
        <Title /> */}
      </section>
    </div>
  );
}

export default App;

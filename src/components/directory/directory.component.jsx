import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

class Directory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          linkUrl: "hats",
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          linkUrl: "shop/jackets",
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          linkUrl: "shop/sneakers",
        },
        {
          title: "womens",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          id: 4,
          linkUrl: "shop/womens",
          size: "large",
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          id: 5,
          linkUrl: "shop/mens",
          size: "large",
        },
      ],
    };
  }

  //TODO: สร้าง function หาค่าความสัมพันธุ์แบบชุด [3,5,9,15,x,y,z]
  test = () => {
    let count = 2;
    const array = [3];
    Array.from(Array(6)).map((v, i) => {
      let num = count + 2;
      count = num;
      const arrayCount = array[array.length - 1];
      let resultCounted = arrayCount + count - 2;
      array.push(resultCounted);
      // console.log(array);
      return <h2>{num}</h2>;
    });
  };
  render() {
    return (
      <div className="directory-menu">
        {this.test()}
        {this.state.sections.map(({ id, ...otheSectionState }) => (
          <MenuItem key={id} {...otheSectionState} />
        ))}
      </div>
    );
  }
}

export default Directory;

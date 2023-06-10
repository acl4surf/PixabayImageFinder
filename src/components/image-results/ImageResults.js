import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { MuiDialog } from "../util/DemoDialog";

export class ImageResults extends Component {
  render() {
    let imageListContent;
    const { images } = this.props;
    if (images) {
      imageListContent = (
        <ImageList cols={4}>
          {images.map((item) => (
            <ImageListItem key={item.id}>
              <img src={item.largeImageURL} alt="" />
              <ImageListItemBar
                title={item.tags}
                subtitle={item.user}
                actionIcon={<MuiDialog imgUrl={item.largeImageURL} />}
              />
            </ImageListItem>
          ))}
        </ImageList>
      );
    } else {
      imageListContent = null;
    }
    return <div>{imageListContent}</div>;
  }
}
ImageResults.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageResults;

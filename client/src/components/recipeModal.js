import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { connect } from "react-redux";
import { addRecipe } from "../actions/recipeActions";
import "../App.css";

class RecipeModal extends React.Component {
    state = {
    modal: false,
    img: [],
    title: "",
    text: "",
  };
  
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

// _handleImageChange(e) {
//     e.preventDefault();

//     let reader = new FileReader();
//     let img = e.target.files[0];

//     reader.onload = () => {
//       this.setState({
//         img: reader.result
//       });
//     }

//     reader.readAsDataURL(img)
//   };
// addImg = e => {
//     e.preventDefault();
//     let newImg = new FormData();
//     newImg.append('Image', img[0]);
//     newImg = this.state.img;
//     this.props.addImage(newImg);
// }

  onSubmit = e => {
    e.preventDefault();

    // let newImg = new FormData();
    // newImg.append('Image', newImg[0]);
    // newImg = this.state.img;
    // this.props.addImage(newImg);

    const newRecipe = {
      title: this.state.title,
      text: this.state.text
    };
    //Add recipe via AddRecipe Action
    this.props.addRecipe(newRecipe);

    //Close modal
    this.toggle();
  };

  render() {
    return (
      <div className="AddRecipeButton">
          {this.props.isAuthenticated ? (
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={this.toggle}
        >
          + Recipe
        </Button>
            ) : (
              <h4 className="mb-3 ml-4">Please log in to manage items</h4>
            )}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add To Recipe List</ModalHeader>
          <ModalBody>
            <Form action='/images' method="post" encType="multipart/form-data" onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="recipe">Recipe</Label>
                <Input
                  type="file"
                  name="img"
                  id="upload"  
                  placeholder="Picture"
                  onChange={this.onChange.bind(this)}
                />
                <Input
                  type="text"
                  name="title"
                  id="recipe"
                  placeholder="Title"
                  onChange={this.onChange}
                />
                <Input
                  type="textarea"
                  name="text"
                  id="recipe"
                  placeholder="Directions"
                  onChange={this.onChange}
                />
                <Button color="dark" style={{ marginTop: "2rem" }} block>
                  {" "}
                  Add Recipe
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mSTP = state => ({
  recipe: state.recipe,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mSTP,
  { addRecipe }
)(RecipeModal);

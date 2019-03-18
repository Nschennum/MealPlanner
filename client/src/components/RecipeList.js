import React from "react";
import {
  Container,
  ListGroup,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getRecipes, deleteRecipe } from "../actions/recipeActions";
import PropTypes from "prop-types";

class RecipeList extends React.Component {
  static propTypes = {
    getRecipes: PropTypes.func.isRequired,
    recipe: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
  };

  componentDidMount() {
    this.props.getRecipes();
  }
  onDeleteClick = id => {
    this.props.deleteRecipe(id);
  };

  render() {
    const { recipes } = this.props.recipe;
    return (
      <Container>
        <ListGroup>
          <TransitionGroup className="recipe-list">
            {recipes.map(({ _id, img, title, text }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <Card>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                  {/* <CardImg
                    top
                    width="100%"
                    alt="Card image cap"
                  >{img}</CardImg> */}
                  <CardBody>
                    <CardTitle>{title}</CardTitle>
                    <CardText>{text}</CardText>
                    {this.props.isAuthenticated ? (
                    <Button
                      className="remove-btn"
                      color="danger"
                      size="sm"
                      onClick={this.onDeleteClick.bind(this, _id)}
                    >
                      - Recipe
                    </Button>
                         ) : null}
                    <i className="fa fa-accessible-icon fa-2x" style={{color: "black"}}></i>
                  </CardBody>
                </Card>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}


const mSTP = state => ({
  recipe: state.recipe
});

export default connect(
  mSTP,
  { getRecipes, deleteRecipe }
)(RecipeList);

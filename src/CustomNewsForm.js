import React from 'react';
import {Form , FormGroup , FormLabel , FormControl, Container , Button} from 'react-bootstrap'


const CustomNewsForm = ({handleChange,submitArticle}) => {
    
    return ( 
        <Container>
            <Form>
                <FormGroup controlId="author">
                    <FormLabel>Author</FormLabel>
                    <FormControl type="text" name="author" placeholder="John Smith" onChange={ (event) => handleChange(event) }/>
                </FormGroup>
                <FormGroup controlId="title">
                    <FormLabel>Title</FormLabel>
                    <FormControl type="text" name="title" placeholder="Capitalisim at its finest" onChange={ (event) => handleChange(event) }/>
                </FormGroup>
                <FormGroup controlId="description">
                    <FormLabel>Article</FormLabel>
                    <FormControl as="textarea" name="description" rows="3" onChange={ (event) => handleChange(event) }/>
                </FormGroup>
                <FormGroup controlId="urlToImage">
                    <FormLabel>Image URL</FormLabel>
                    <FormControl type="url" name="urlToImage" placeholder="image.com/image1" onChange={ (event) => handleChange(event) }/>
                </FormGroup>
                <FormGroup>
                    <Button onClick={(event) => submitArticle(event)}>
                        Submit
                    </Button>
                </FormGroup>
            </Form>
        </Container>
     );
}
 
export default CustomNewsForm;
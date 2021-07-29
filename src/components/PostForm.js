import React, { Component } from 'react';


export default class PostForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ''
        };
    }

    submitHandler = event => {
        event.preventDefault();

        const {title} = this.state;

        const newPost = {
            title, id: Date.now().toString()
        }

        console.log(newPost)

        this.setState({title: ''});

    }

    changeInputHandler = event => {
        this.setState(prev => ({...prev, ...{
            [event.target.name]: event.target.value
        }}));
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div className="form-group">
                    <label htmlFor="title" className="form-label">Заголовок поста</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={this.state.title}
                        name='title'
                        onChange={this.changeInputHandler}
                    />
                </div>
                <button type="submit" className="btn btn-success mt-2">Создать</button>
            </form>
        );
    }
}
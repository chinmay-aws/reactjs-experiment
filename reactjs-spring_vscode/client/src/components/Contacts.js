/**
 * @copyright: Chinmay
 */
 import React, { Component } from 'react';
//If you are going to use "redux" do the "export" at the bottom of the class instead of top.
export default class Contacts extends Component {
    /**
     * "props" stand for Properties - used to pass data from one component to another.
     * "state" holds all the information of your application 
     *      so it could hold data which we will need to render inside our component.
     *      It can use specific UI through false states which we may want to use for UI behaviors.
     *      All different states of our application is stored here (may be an arrayy for multiple states).
     */

    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
        };
    }

    render(){
        return (
            <div>
                <p>Hello from Chinmay</p>
            </div>
        )
    }
}
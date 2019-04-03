
import React,{Component} from 'react';
import PropTypes from 'prop-types';
import './backToTop.css'; //
import $ from 'jquery';

class BackToTop extends Component {
    constructor(props) {
        super(props);
        this.state = { isShow: false };
        this.handleBackToTop = this.handleBackToTop.bind(this);
       
      }
    componentDidMount(){
        $(window).scroll(function () {
            if ($(this).scrollTop() > 0) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 500);
            return false;
        });
    }

    render() {
        return (
            <div id="back-to-top" className="hidden"  onClick={this.handleBackToTop}>
                <svg viewBox="0 0 24 24">
                    <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"
                        fill="#ffffff">
                    </path>
                </svg>
            </div>
        );
    }

    handleBackToTop(e) {
        e.preventDefault();
        this.setState({ text: e.target.value });
      }
}
  
  BackToTop.propTypes = {
      className: PropTypes.string,
  };
  
  export default BackToTop;
  

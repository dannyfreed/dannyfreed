import React from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';
import {browserHistory} from 'react-router'
import Raven from 'raven'

class Checkout extends React.Component {
  state = {
    user: {},
    isFreeSession: false,
  }
  componentWillMount = () => {
    if (this.props.routeParams.userId) {
      fetch(process.env.REACT_APP_JOY_BACKEND_URL + 'api/user/find?userId=' + this.props.routeParams.userId)
      .then(function(response){
        return response.json()
      }).then((json) => {
        if (!json) {
          window.location = 'https://m.me/hellojoyai?ref=coach_generic'
          throw new Error('invalid user lookup -- not found' + this.props.routeParams.userId);
        }
        else {
          fetch(process.env.REACT_APP_JOY_BACKEND_URL + 'api/coach/sessions/countByUserId?userId=' + this.props.routeParams.userId)
          .then(function(response){
            return response.json()
          }).then((json) => {
            this.setState({
              isFreeSession: json.count > 0 ? false : true
            })
          })
          .catch((err) => {
            console.error(err)
            Raven.captureException(err)
          })

          this.setState({
            user: json
          })
        }
      })
      .catch((err) => {
        console.error(err)
        Raven.captureException(err)
      })
    }
    else {
      window.location = 'https://m.me/hellojoyai?ref=coach_generic'
      console.error('no user found.');
    }
  }
  handleCheckoutFormSubmitted = () => {
    if (this.props.route.path.includes('onboarding') || this.props.route.path.includes('talk')) {
      //Close webview messenger
      browserHistory.push('/closeThisWindow')
    }
    else {
      window.location.href = 'https://my.timekit.io/joycoach'
    }
  }
  render() {
    return (
      <div className="Page AddPayment">
        <StripeProvider apiKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}>
          <Elements>
            {
              this.props.route.path.includes('onboarding') ? //DEPRECATED
                <CheckoutForm
                  isOnboarding={true}
                  user={this.state.user}
                  onSubmit={this.handleCheckoutFormSubmitted}
                />
              :
              this.props.route.path.includes('talk') ? //for talk now flow
                <CheckoutForm
                  talkNow={true}
                  user={this.state.user}
                  onSubmit={this.handleCheckoutFormSubmitted}
                />
                :
                <CheckoutForm
                  isFreeSession={this.state.isFreeSession}
                  user={this.state.user}
                  onSubmit={this.handleCheckoutFormSubmitted}
                />
            }
          </Elements>
        </StripeProvider>
      </div>
    );
  }
}

export default Checkout;

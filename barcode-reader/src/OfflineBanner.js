import React, { Component }  from 'react';
import Alert from 'react-bootstrap/Alert';
class OfflineBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }
  render() {
    const handleDismiss = () => this.setState({ show: false });
    const handleShow = () => this.setState({ show: true });
    if (this.state.show && !navigator.onLine) {
      return (
        <Alert variant="info" onClose={handleDismiss} dismissible>
          <Alert.Heading>Oops! You are offline</Alert.Heading>
          <p>
            Don't worry this app is offline functional all functions will continue to run
          </p>
        </Alert>
      );
    }
    return(null);
  }
}
export default OfflineBanner;

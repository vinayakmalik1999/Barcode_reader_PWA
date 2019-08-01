import React  from 'react';
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
  
    if (this.state.show) {
      return (
        <Alert variant="info" onClose={handleDismiss} dismissible>
          <Alert.Heading>Empty Space</Alert.Heading>
          <p>
          Oops! It seems you forgot to type in anything, please try again.
          </p>
        </Alert>
      );
    }
    return(null);
  }
}
export default OfflineBanner;

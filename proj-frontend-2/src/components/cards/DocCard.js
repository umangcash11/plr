import React, { Component } from "react";
import { injectIntl } from "react-intl";
import {
  Row,
  Card,
  CardBody,
  CardSubtitle,
  Col,
  Input,
  CardText,
  Button,
} from "reactstrap";
import ThumbnailImage from "../../components/cards/ThumbnailImage";
import { RenderSlots } from "../../views/app/see-doctors-clinics/RenderSlots";
import RatingComponent from "../../components/common/Rating";
import { Wizard, Steps, Step } from "react-albus";
import { BottomNavigation } from "../wizard/BottomNavigation";
class DocCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      radioValue: "",
      date: new Date(),
    };

    this.onClickNext = this.onClickNext.bind(this);
    this.onClickPrev = this.onClickPrev.bind(this);
    this.topNavClick = this.topNavClick.bind(this);
    this.showModal = this.showModal.bind(this);
  }
  onChange = (e) => {
    // alert(e.currentTarget.value);
    this.setState({ radioValue: e.currentTarget.value });
  };
  showModal = () => {
    this.setState({ open: !this.state.open });
  };
  topNavClick(stepItem, push) {
    push(stepItem.id);
  }
  onBookAppointment = () => {
    console.log(localStorage.getItem("user_id"));
    console.log(this.state.date, this.state.radioValue);
    console.log(this.props.item);
  };
  onClickNext(goToNext, steps, step) {
    step.isDone = true;
    if (steps.length - 1 <= steps.indexOf(step)) {
      return;
    }
    goToNext();
  }

  onClickPrev(goToPrev, steps, step) {
    if (steps.indexOf(step) <= 0) {
      return;
    }
    goToPrev();
  }
  render() {
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();
    const {
      ClinicName,
      Location,
      Address,
      Pincode,
      Rating,
      MinMaxCost,
      PhoneNumber,
    } = this.props.item;
    var price = MinMaxCost.split("|");

    return (
      <>
        <Card className=" d-flex flex-row mb-4">
          <div className=" d-flex flex-grow-1 min-width-zero">
            <CardBody className=" pl-0 align-self-center  flex-sm-row ">
              <Wizard>
                <Steps>
                  <Step id="step1" name={"Step 1"} desc={"BLAH"}>
                    <div className="wizard-basic-step ">
                      <Row>
                        <Col sm={12} md={6} lg={4} className="offset-1">
                          <div style={{ height: "15vh", width: "20vw" }}>
                            <ThumbnailImage
                              src={"/assets/img/speciality/3.jpg"}
                              alt={"dummy"}
                              className="m-4"
                              small={true}
                            />
                          </div>
                        </Col>

                        <Col
                          sm={6}
                          md={6}
                          lg={6}
                          style={{
                            justifyContent: "space-between",
                            fontSize: 24,
                          }}
                        >
                          <Row style={{ padding: 10, fontSize: 24 }}>
                            <Col sm={9}>
                              <CardText
                                style={{ fontWeight: "bolder", fontSize: 28 }}
                              >
                                {ClinicName}
                              </CardText>
                            </Col>
                          </Row>
                          <Row style={{ padding: 10, fontSize: 24 }}>
                            <i className="iconsminds-location-2" />

                            <Col sm={6} className="mt-2 ml-4">
                              <CardText>{Location}</CardText>
                            </Col>
                          </Row>
                          <Row style={{ padding: 10, fontSize: 24 }}>
                            <i className="iconsminds-building" />

                            <Col sm={9} className="mt-2 ml-4">
                              <CardText>{Address}</CardText>
                            </Col>
                          </Row>

                          <Row style={{ padding: 10, fontSize: 24 }}>
                            <i className="simple-icon-like" />
                            <Col sm={6} className="mt-2 ml-4">
                              <RatingComponent
                                total={5}
                                rating={Rating}
                                interactive={false}
                              />
                            </Col>
                          </Row>
                          <Row style={{ padding: 10, fontSize: 24 }}>
                            <i
                              className="iconsminds-coins"
                              style={{ width: 10, height: 10 }}
                            />
                            <Col className="mt-2 ml-5">
                              <CardText>{`₹${price[0]} - ${price[1]}`}</CardText>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </div>
                  </Step>
                  <Step
                    id="step2"
                    name={"wizard.step-name-2"}
                    desc={"wizard.step-desc-2"}
                  >
                    <div
                      className="wizard-basic-step "
                      style={{ margin: 10, padding: 5, fontSize: 24 }}
                    >
                      <Row className="mb-5">
                        <Col sm={{ offset: 1, size: 4 }}>Select Date</Col>
                        <Col sm={6}>
                          <Input
                            name="date"
                            type="date"
                            value={this.state.date}
                            onChange={(e) =>
                              this.setState({ date: e.target.value })
                            }
                          />
                        </Col>
                      </Row>
                      <Row className="mb-5">
                        <Col sm={{ offset: 1, size: 4 }} className="mb-2">
                          Select Slot
                        </Col>
                        <Col sm={12}>
                          <RenderSlots
                            onChange={this.onChange}
                            radioValue={this.state.radioValue}
                          />
                        </Col>
                      </Row>
                      <div className="d-flex justify-content-end align-items-center">
                        <Button
                          onClick={this.onBookAppointment}
                          color="primary"
                          className="btn-shadow"
                        >
                          BOOK APPOINTMENT
                        </Button>
                      </div>
                    </div>
                  </Step>
                </Steps>

                <BottomNavigation
                  onClickNext={this.onClickNext}
                  onClickPrev={this.onClickPrev}
                  className="justify-content-between"
                  prevLabel={"Back"}
                  nextLabel={"Next"}
                />
              </Wizard>
            </CardBody>
          </div>
        </Card>
      </>
    );
  }
}

export default injectIntl(DocCard);
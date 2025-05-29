import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addFavourite, fetchJobsByCompany } from "../redux/action/index";
import Job from "./Job";
import { useParams } from "react-router-dom";

const CompanySearchResults = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs?.jobs || []);
  const params = useParams();

  useEffect(() => {
    dispatch(fetchJobsByCompany(params.company));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.company, dispatch]);

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Job posting for: {params.company}</h1>
          <button
            className="btn btn-primary mb-3"
            onClick={() => dispatch(addFavourite(params.company))}
          >
            Add Favourite
          </button>
          {jobs && jobs.length > 0 ? (
            jobs.map((jobData) => <Job key={jobData._id} data={jobData} />)
          ) : (
            <p>No jobs found for this company.</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;

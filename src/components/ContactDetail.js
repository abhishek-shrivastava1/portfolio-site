import styled from "styled-components";

const ContactDetail = ({ title, information }) => {
  return (
    <StyledContactDetail>
      <tr>
        <td>
          <h3>{title}:</h3>
        </td>
        <td>
          <p>
            {title === "Age" ? new Date().getFullYear() - 1997 : information}
          </p>
        </td>
      </tr>
    </StyledContactDetail>
  );
};

const StyledContactDetail = styled.div`
  tr {
    display: flex;
    align-items: center;
    margin: 1rem 0;
  }
  p {
    padding: 0;
    color: #5f5f5f;
  }
  h3 {
    margin-right: 1rem;
    color: #353535;
  }
`;

export default ContactDetail;

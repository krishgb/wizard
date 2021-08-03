import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form'
import Footer from './components/Footer/Footer'
import { majors, states, details } from './data';




function App() {

  const [form, setForm] = useState(1)
  const [student, setStudent] = useState({
    s_name: '',
    email: '',
    phone: '',
    age: '',
    fatherName: '',
    motherName: '',
    foccupation: '',
    moccupation: '',
    sslc: '',
    sslcSchool: '',
    hsc: '',
    hscSchool: '',
    degree: '',
    sports: '',
    address: '',
    city: '',
    state: '',
    country: 'India'
  })

  const setValue = (state, value) => {
    setStudent(prev => ({
      ...prev,
      [state]: value
    }))
  }

  const increase = () => form === 5 ? setForm(6) : setForm(form + 1)

  const decrease = () => form === 1 ? setForm(1) : setForm(form - 1)

  return (
    <div className="App">
      <Header />

      {form === 1 &&
        <Form
          increase={increase}
          decrease={decrease}
          formNo={form}
          setValue={setValue}
          items={
            [
              { name: details.NAME, placeholder: 'Killua Zoldyck', label: 'Name', value: student[details.NAME] },
              { name: details.AGE, placeholder: '18', label: 'Age', type: 'number', value: student[details.AGE], min: "17" },
              { name: details.EMAIL, type: details.EMAIL, placeholder: 'killua@zoldyck.com', label: 'Email', value: student[details.EMAIL] },
              { name: details.PHONE, type: 'tel', placeholder: '7391468250', label: 'Phone', value: student[details.PHONE], minLength: "10", maxLength: "12" }
            ]}
        />
      }

      {form === 2 &&
        <Form
          increase={increase}
          decrease={decrease}
          formNo={form}
          setValue={setValue}
          items={
            [
              { name: details.FATHER, placeholder: 'Silva Zoldyck', label: 'Father Name', value: student[details.FATHER] },
              { name: details.MOTHER, placeholder: 'Kikyo Zoldyck', label: 'Mother Name', value: student[details.MOTHER] },
              { name: details.F_OCCUPATION, placeholder: 'Manager', label: `Father's Occupation`, value: student[details.F_OCCUPATION] },
              { name: details.M_OCCUPATION, placeholder: 'Manager', label: `Mother's Occupation`, value: student[details.M_OCCUPATION] }
            ]}
        />
      }

      {form === 3 &&
        <Form
          increase={increase}
          decrease={decrease}
          formNo={form}
          setValue={setValue}
          items={
            [
              { name: details.SSLC, placeholder: '99.5', label: 'SSLC Percentage', value: student[details.SSLC], type: 'number', max: "100" },
              { name: details.S_SCHOOL, placeholder: 'Padokea School', label: 'School', value: student[details.S_SCHOOL] },
              { name: details.HSC, placeholder: '99.8', label: 'HSC Percentage', value: student[details.HSC], type: 'number', max: "100" },
              { name: details.H_SCHOOL, placeholder: 'Padokea', label: 'High School', value: student[details.H_SCHOOL] },
              { name: details.SPORTS, placeholder: 'Yo - Yo', label: 'Sports(if any)', required: false, value: student[details.SPORTS] },
              { name: details.DEGREE, t: 'select', placeholder: 'Aerospace/ aeronautical engineering', label: 'Major to Pursue', id: 'degrees', list: majors, value: student[details.DEGREE] }
            ]}
        />
      }

      {form === 4 &&
        <Form
          increase={increase}
          decrease={decrease}
          formNo={form}
          setValue={setValue}
          items={
            [
              { name: details.ADDRESS, placeholder: 'Address', label: 'Address', value: student[details.ADDRESS] },
              { name: details.CITY, placeholder: "Billy Hills", label: 'City', value: student[details.CITY] },
              { name: details.COUNTRY, placeholder: 'The Republic of Padokea', label: 'Country', value: student[details.COUNTRY], capitalize: true },
              { name: details.STATE, placeholder: 'Small Swan', label: 'State', id: 'states', list: states, value: student[details.STATE] }
            ]
          }
        />
      }

      {form === 5 &&
        <div className="details">
          <p>Thanks for your interest in our Instituition. We will email you shortly.</p>

          <table>
            <tbody>
              <tr style={{ background: 'none' }}>
                <td><h2>Personal Info</h2></td>
              </tr>
              <tr>
                <td>Name</td>
                <td>{student.s_name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{student.email}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>{student.phone}</td>
              </tr>
              <tr>
                <td>Age</td>
                <td>{student.age}</td>
              </tr>
              <tr>
                <td>Father</td>
                <td>{student.fatherName}</td>
              </tr>
              <tr>
                <td>Mother</td>
                <td>{student.motherName}</td>
              </tr>
              <tr>
                <td>Father's Occupation</td>
                <td>{student.foccupation}</td>
              </tr>
              <tr>
                <td>Mother's Occupation</td>
                <td>{student.moccupation}</td>
              </tr>
              <tr style={{ background: 'none' }}>
                <td><h2>Academic Info</h2></td>
              </tr>
              <tr>
                <td>SSLC %</td>
                <td>{student.sslc}</td>
              </tr>
              <tr>
                <td>School</td>
                <td>{student.sslcSchool}</td>
              </tr>
              <tr>
                <td>HSC %</td>
                <td>{student.hsc}</td>
              </tr>
              <tr>
                <td>High School</td>
                <td>{student.hscSchool}</td>
              </tr>
              <tr>
                <td>Subject</td>
                <td>{student.degree}</td>
              </tr>
              {
                student.sports ?
                  <tr>
                    <td>Sports</td>
                    <td>{student.sports}</td>
                  </tr>
                  : null
              }
              <tr style={{ background: 'none' }}>
                <td><h2>Address Info</h2></td>
              </tr>
              <tr>
                <td>Address</td>
                <td>{student.address}</td>
              </tr>
              <tr>
                <td>City</td>
                <td>{student.city}</td>
              </tr>
              <tr>
                <td>State</td>
                <td>{student.state}</td>
              </tr>
              <tr>
                <td>Country</td>
                <td>{student.country}</td>
              </tr>
            </tbody>
          </table>

          <button onClick={() => setForm(1)}>Home</button>
        </div>
      }


      <Footer />
    </div>
  );
}

export default App;

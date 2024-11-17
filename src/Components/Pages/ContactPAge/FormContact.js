import React from 'react'
const FormContact = () => {
    return (
        <form>
            <div className="form-control">
                <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-control">
                <input type="email" placeholder="Email" required />
            </div>
            <div className="form-control">
                <input type="text" placeholder="Phone Numbers" required />
            </div>
            <div className="form-control">
                <select required>
                    <option>Selecty Departement</option>
                    <option>One</option>
                    <option>Two</option>
                    <option>Three</option>
                </select>
            </div>
            <div className="form-control">
                <textarea placeholder="Type Message" required/>
            </div>
            <div className="form-control">
                <button type="submit">submit</button>
            </div>
        </form>
    );
}
export default FormContact;
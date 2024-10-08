import React from 'react'

const Address = () => {
    return (
        <div className='m-3'>
            <h3 className='text-center'>Address Details</h3>
            <form className='container'>
                <div className="form-group">
                    <label htmlFor="addressLine1">Address Line 1:</label>
                    <input type="text" className="form-control" id="addressLine1" name="addressLine1" required />
                </div>

                <div className="form-group">
                    <label htmlFor="addressLine2">Address Line 2 (Optional):</label>
                    <input type="text" className="form-control" id="addressLine2" name="addressLine2" />
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="city">City:</label>
                        <input type="text" className="form-control" id="city" name="city" required />
                    </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="state">State/Province:</label>
                        <input type="text" className="form-control" id="state" name="state" required />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="zipCode">ZIP/Postal Code:</label>
                        <input type="text" className="form-control" id="zipCode" name="zipCode" required />
                    </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="country">Country:</label>
                        <select className="form-control" id="country" name="country" required>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="UK">United Kingdom</option>
                        </select>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default Address
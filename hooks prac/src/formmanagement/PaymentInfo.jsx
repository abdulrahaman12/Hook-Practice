import React from 'react'

function PaymentInfo() {
    return (
        <div className='m-3'>
            <h3 className='text-center'>Payment Information</h3>
            <form action="" className='container'> <div class="form-group">
                <label for="cardNumber">Card Number:</label>
                <input type="text" class="form-control" id="cardNumber" name="cardNumber" placeholder="1234 5678 9012 3456" required />
            </div>
            <div class="form-row">
                    <div class="form-group col-md-4">
                        <label for="expMonth">Expiration Month:</label>
                        <select class="form-control" id="expMonth" name="expMonth" required>
                            <option value="" disabled selected>Select Month</option>
                            <option value="01">01 - January</option>
                            <option value="02">02 - February</option>
                            <option value="03">03 - March</option>
                            <option value="04">04 - April</option>
                            <option value="05">05 - May</option>
                            <option value="06">06 - June</option>
                            <option value="07">07 - July</option>
                            <option value="08">08 - August</option>
                            <option value="09">09 - September</option>
                            <option value="10">10 - October</option>
                            <option value="11">11 - November</option>
                            <option value="12">12 - December</option>
                        </select>
        </div>
                    <div class="form-group col-md-4">
                        <label for="expYear">Expiration Year:</label>
                        <select class="form-control" id="expYear" name="expYear" required>
                            <option value="" disabled selected>Select Year</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                        </select>
                    </div>
                    <div class="form-group col-md-4">
                        <label for="cvv">CVV:</label>
                        <input type="text" class="form-control" id="cvv" name="cvv" placeholder="123" required />
                    </div>
                </div>
            </form>
        </div>

    )
}

export default PaymentInfo
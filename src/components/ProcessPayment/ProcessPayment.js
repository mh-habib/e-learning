import React from 'react';
import { CardElement, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CardPaymentForm from './CardPaymentForm';

const stripePromise = loadStripe('pk_test_51IgmskF4gHRsj02FlCcL8jemLznh9rd0zrg7fzLRBf76QxvHAkXF1Iz8xv0EoxfuVR77bNjuuap1w0SxhrYhutSS00lvspaP4M');


const ProcessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
            <CardPaymentForm handlePayment={handlePayment}></CardPaymentForm>
        </Elements>
    );
};

export default ProcessPayment;




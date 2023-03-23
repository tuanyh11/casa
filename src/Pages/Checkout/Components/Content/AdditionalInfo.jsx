import React from 'react'

const AdditionalInfo = () => {
    return (
        <div> <div className="woocommerce-additional-fields">
            <h3 className="mb-[10px]">Additional information</h3>

            <div className="woocommerce-additional-fields__field-wrapper">
                <p
                    className="form-row notes mb-[13px]"
                    id="order_comments_field"
                    data-priority=""
                >
                    <label
                        for="order_comments"
                        className=" font-semibold  leading-[2] block mb-[5px]"
                    >
                        Order notes&nbsp;
                        <span className="optional">(optional)</span>
                    </label>
                    <span className="woocommerce-input-wrapper block w-full">
                        <textarea
                            name="order_comments"
                            className=" !rounded-none !h-[60px]  "
                            id="order_comments"
                            placeholder="Notes about your order, e.g. special notes for delivery."
                            rows={2}
                            cols={5}
                        ></textarea>
                    </span>
                </p>{" "}
            </div>
        </div></div>
    )
}

export default AdditionalInfo
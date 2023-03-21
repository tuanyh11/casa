import React from 'react';

const ChangePassword = () => {
    return (
        <div className="change-pass">
            <form>
                <fieldset>
                    <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                        <label htmlFor="password_current">
                            Current password&nbsp;<span className="required">*</span>
                        </label>
                        <span className="password-input">
                            <input
                                type="password"
                                className="woocommerce-Input woocommerce-Input--password input-text"
                                name="password_current"
                                id="password_current"
                                required
                            />
                        </span>
                    </p>
                    <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                        <label htmlFor="password_1">
                            New password&nbsp;<span className="required">*</span>
                        </label>
                        <span className="password-input">
                            <input
                                type="password"
                                className="woocommerce-Input woocommerce-Input--password input-text"
                                name="password_1"
                                id="password_1"
                                required
                            />
                        </span>
                    </p>
                    <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                        <label htmlFor="password_2">Confirm new password&nbsp;<span className="required">*</span></label>
                        <span className="password-input">
                            <input
                                type="password"
                                className="woocommerce-Input woocommerce-Input--password input-text"
                                name="password_2"
                                id="password_2"
                                required
                            />
                        </span>
                    </p>
                </fieldset>
                <button
                    type="submit"
                    className=" btn-account"
                    name="save_account_details"
                >
                    Save changes
                </button>
            </form>
        </div>
    );
};

export default ChangePassword;
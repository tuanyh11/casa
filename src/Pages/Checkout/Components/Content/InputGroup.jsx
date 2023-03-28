import { Country, State } from 'country-state-city'
import React, { useMemo, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { InputV1, SelectorV3 } from '../../../../Components'

const InputGroup = () => {
  const { register, watch, formState: { errors } } = useFormContext()

  const selectedCountry = watch("country");

  const handleFilterCountries = (e, data) =>
    data.filter((country) =>
      e.target.value
        ? country.name.toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0
        : true
    );

  const handleGetState = (item) => {
    return State.getStatesOfCountry(item?.isoCode);
  };


  const [states, setStates] = useState([]);

  const SelectCountry = useMemo(() => {
    const countries = Country.getAllCountries();
    return (
      <div className="">
        <SelectorV3
          data={countries}
          disPlayKey={(item) => item?.name}
          onSelect={(item) => {
            setValue("country", item);
            setStates([...handleGetState(item)]);
            setValue("state", "");
          }}
          title={selectedCountry?.name || countries?.[0]?.name}
          label="Country / Region"
          onSearch={(e) => handleFilterCountries(e, countries)}
          isSelected={(item) => selectedCountry?.name === item?.name}
        />
      </div>
    );
  }, [selectedCountry, errors]);


  return (
    <div>
      <div className="">
        <div className="grid grid-cols-2 screens-525:gap-x-[30px] flex-wrap">
          <div className="col-span-2 screens-525:col-span-1">
            <InputV1
              label={"First name"}
              name="firstName"
              validate={errors?.firstName ? { color: '#a00', labelColor: true } : watch("startChecked.firstName") ? { color: "#6dc22e" } : null}
              register={{
                ...register("firstName", {
                  onBlur: () => {
                    setValue("startChecked.firstName", true)
                  },
                  onChange: () => {
                    setValue("startChecked.firstName", false)
                  },
                  required: {
                    value: true,
                    message: (
                      <li>
                        <strong>Billing First name</strong>{" "}
                        is a required field.{" "}
                      </li>
                    ),
                  },
                }),
              }}
            />
          </div>
          <div className="col-span-2 screens-525:col-span-1">
            <InputV1
              label={"Last name"}
              validate={errors?.lastName ? { color: '#a00', labelColor: true } : watch("startChecked.lastName") ? { color: '#6dc22e' } : ''}
              register={{
                ...register("lastName", {
                  onBlur: () => {
                    setValue("startChecked.lastName", true)
                  },
                  onChange: () => {
                    setValue("startChecked.lastName", false)
                  },
                  required: {
                    value: true,
                    message: (
                      <li>
                        <strong>Billing Last name</strong>{" "}
                        is a required field.{" "}
                      </li>
                    ),
                  },
                }),
              }}
            />
          </div>
        </div>

        <div className="">
          <InputV1
            label={"Company name (optional)"}
            validate={!errors?.company && watch("startChecked.company") ? { color: '#6dc22e' } : ''}
            register={...register("company", {
              onBlur: () => {
                setValue("startChecked.company", true)

              },
              onChange: () => {
                setValue("startChecked.company", false)
              }
            })}
            offRequired={true}
          />
        </div>

        <div className="mb-[15px]">{SelectCountry}</div>

        <div className="">
          <InputV1
            label={"Street address"}
            validate={errors?.streetAddress ? { color: '#a00', labelColor: true } : watch("startChecked.streetAddress") ? { color: '#6dc22e' } : ''}
            placeholder="House number and street name"
            register={{
              ...register("streetAddress", {
                onBlur: () => {
                  setValue("startChecked.streetAddress", true)
                },
                onChange: () => {
                  setValue("startChecked.streetAddress", false)
                },
                required: {
                  value: true,

                  message: (
                    <li>
                      <strong>
                        Billing Street address
                      </strong>{" "}
                      is a required field.{" "}
                    </li>
                  ),
                },
              }),
            }}
          />

          <InputV1 placeholder="Apartment, suite, unit, etc. (optional)"
            validate={!errors?.infoExtra && watch("startChecked.infoExtra") ? { color: '#6dc22e' } : ''}
            register={...register("infoExtra", {
              onBlur: () => {
                setValue("startChecked.infoExtra", true)

              },
              onChange: () => {
                setValue("startChecked.infoExtra", false)
              }
            })} />
        </div>

        <div className="">
          <InputV1
            label={"Town / City"}
            validate={errors?.townAndCity ? { color: '#a00', labelColor: true } : watch("startChecked.townAndCity") ? { color: '#6dc22e' } : ''}
            register={{
              ...register("townAndCity", {
                onBlur: () => {
                  setValue("startChecked.townAndCity", true)
                },
                onChange: () => {
                  setValue("startChecked.townAndCity", false)
                },
                required: {
                  value: true,
                  message: (
                    <li data-id="billing_city">
                      <strong>Billing Town / City</strong>{" "}
                      is a required field.{" "}
                    </li>
                  ),
                },
              }),
            }}
          />
        </div>

        <div className="mb-[15px]">
          {states.length > 0 && (
            <SelectorV3
              data={states}
              disPlayKey={(item) => item?.name}
              onSelect={(item) => {
                setValue("state", item);
              }}
              title={
                watch("state")?.name ||
                "Select an option..."
              }
              label="State / County"
              onSearch={(e) =>
                handleFilterCountries(
                  e,
                  State.getAllStates()
                )
              }
              isSelected={(item) =>
                states?.name === item?.name
              }
            />
          )}
        </div>

        <InputV1
          label={"Postcode / ZIP"}
          placeholder="House number and street name"
          validate={errors?.postcode ? { color: '#a00', labelColor: true } : watch("startChecked.postcode") ? { color: '#6dc22e' } : ''}
          register={{
            ...register("postcode", {
              onBlur: () => {
                setValue("startChecked.postcode", true)
              },
              onChange: () => {
                setValue("startChecked.postcode", false)
              },
              required: {
                value: true,
                message: (
                  <li>
                    <strong>Billing Postcode / ZIP</strong>{" "}
                    is a required field.{" "}
                  </li>
                ),
              },
            }),
          }}
        />

        <InputV1
          label={"Phone"}
          validate={errors?.phone ? { color: '#a00', labelColor: true } : watch("startChecked.phone") ? { color: '#6dc22e' } : ''}
          placeholder="House number and street name"
          register={{
            ...register("phone", {
              onBlur: () => {
                setValue("startChecked.phone", true)
              },
              onChange: () => {
                setValue("startChecked.phone", false)
              },
              required: {
                value: true,
                message: (
                  <li>
                    <strong>Billing Phone</strong> is a
                    required field.{" "}
                  </li>
                ),
              },
            }),
          }}
        />

        <InputV1
          label={"Email address"}
          placeholder="House number and street name"
          validate={errors?.email ? { color: '#a00', labelColor: true } : watch("startChecked.phone") ? { color: '#6dc22e' } : ''}
          register={{
            ...register("email", {
              onBlur: () => {
                setValue("startChecked.phone", true)
              },
              onChange: () => {
                setValue("startChecked.phone", false)
              },
              required: {
                value: true,
                message: (
                  <li data-id="billing_email">
                    <strong>Billing Email address</strong>{" "}
                    is a required field.{" "}
                  </li>
                ),
              },
            }),
          }}
        />
      </div>
    </div>
  )
}

export default InputGroup
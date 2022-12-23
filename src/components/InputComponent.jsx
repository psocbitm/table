import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import "./inputComponent.css";
import styled from "styled-components";
const InputComponent = ({
  borderRadius,
  border,
  shadow,
  buttonBorderRadius,
  disabled,
}) => {
  const styles = useStaticQuery(graphql`
    query MyQuery {
      Strapi {
        shadowPresets {
          data {
            attributes {
              blur
              inset
              label
              spread
              x
              y
            }
          }
        }
        borderPresets {
          data {
            attributes {
              label
              style
              width
            }
          }
        }
        radiusPresets {
          data {
            attributes {
              label
              value
            }
          }
        }
        breakpoints {
          data {
            attributes {
              device_name
              label
              width
            }
          }
        }
      }
    }
  `);

  const devices = styles.Strapi.breakpoints.data.map((device) => {
    return {
      label: device.attributes.label,
      width: device.attributes.width,
    };
  });

  const StyledWrapper = styled.div`
    display: flex;
    flex-direction: row-reverse;
    border: 1px solid black;
    box-sizing: border-box;
    max-width: 384px;
    min-width: 324px;
    height: 64px;
    padding: 5px;
    :focus-within {
      border: 1px solid #026ffa;
    }

    border-radius: ${styles.Strapi.radiusPresets.data.find(
      (item) => item.attributes.label === borderRadius
    ).attributes.value};

    @media (max-width: ${devices.find((device) => device.label === "desktop")
        .width}) {
      max-width: 384px;
      min-width: 324px;
      height: 64px;
    }

    @media (max-width: ${devices.find((device) => device.label === "laptop")
        .width}) {
      max-width: 320px;
      min-width: 280px;
      height: 56px;
    }

    @media (max-width: ${devices.find((device) => device.label === "mobile")
        .width}) {
      max-width: 256px;
      min-width: 200px;
      height: 44px;
    }
  `;
  const StyledInput = styled.input`
    box-sizing: border-box;
    border: none;
    outline: none;
    color: #5a5a5a;
    font-size: 20px;
    padding-left: calc(30px - 5px);
    padding-right: 0;
    font-weight: 400;
    width: 100%;
    :placeholder {
      font-size: 12px;
      line-height: 15px;
      color: #5a5a5a;
    }
    disabled::-webkit-input-placeholder {
      color: #fff;
    }
    disabled:-moz-placeholder {
      color: #fff;
    }
    disabled::-moz-placeholder {
      color: #fff;
    }
    disabled:-ms-input-placeholder {
      color: #fff;
    }

    @media (max-width: ${devices.find((device) => device.label === "desktop")
        .width}) {
      padding-left: calc(30px - 5px);
      font-size: 16px;
      line-height: 20px;
      :placeholder {
        font-size: 16px;
        line-height: 20px;
      }
    }

    @media (max-width: ${devices.find((device) => device.label === "laptop")
        .width}) {
      padding-left: calc(20px - 4px);
      font-size: 14px;
      line-height: 18px;
      :placeholder {
        font-size: 14px;
        line-height: 18px;
      }
    }

    @media (max-width: ${devices.find((device) => device.label === "mobile")
        .width}) {
      padding-left: calc(20px - 4px);
      font-size: 12px;
      line-height: 15px;
      :placeholder {
        font-size: 12px;
        line-height: 15px;
      }
    }
  `;
  const StyledButton = styled.button`
    box-sizing: border-box;
    min-width: 144px;
    border: none;
    border-radius: ${styles.Strapi.radiusPresets.data.find(
      (item) => item.attributes.label === buttonBorderRadius
    ).attributes.value};

    background-color: #026ffa;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    cursor: pointer;
    color: #ffffff;
    :active {
      background-color: #025ed5;
      box-shadow: 0px 0px 0px 0px #026ffa;
    }
    :focus-visible {
      outline: none;
    }
    @media (max-width: ${devices.find((device) => device.label === "desktop")
        .width}) {
      font-size: 20px;
      line-height: 25px;
      min-width: 144px;
    }

    @media (max-width: ${devices.find((device) => device.label === "laptop")
        .width}) {
      font-size: 16px;
      line-height: 20px;
      min-width: 100px;
    }

    @media (max-width: ${devices.find((device) => device.label === "mobile")
        .width}) {
      font-size: 12px;
      line-height: 15px;
      min-width: 88px;
    }
  `;

  return (
    <>
      <StyledWrapper>
        <StyledButton disabled={disabled}>Request</StyledButton>
        <StyledInput type="text" placeholder="Input Text" disabled={disabled} />
      </StyledWrapper>
    </>
  );
};

export default InputComponent;

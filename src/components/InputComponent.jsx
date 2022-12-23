import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import "./inputComponent.css";
import styled from "styled-components";
const InputComponent = ({
  inputFieldRadius,
  border,
  buttonBorderRadius,
  helperText,
  disabled,
}) => {
  const styles = useStaticQuery(graphql`
    query MyQuery {
      Strapi {
        borderPresets {
          data {
            attributes {
              label
              style
              width
            }
          }
        }
        breakpoints {
          data {
            attributes {
              label
              width
            }
          }
        }
        colorPalettes {
          data {
            attributes {
              label
              mode
              error {
                code
                id
                label
                opacity
              }
              neutral {
                code
                id
                label
                opacity
              }
              primary {
                code
                id
                label
                opacity
              }
              secondary {
                code
                id
                label
                opacity
              }
              success {
                code
                id
                label
                opacity
              }
              tertiary {
                code
                id
                label
                opacity
              }
              warning {
                code
                id
                label
                opacity
              }
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
        textstyles(pagination: { limit: 50 }) {
          data {
            attributes {
              label
              fontfamily
              fontsize
              fontweight
              line_height
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
  const borderPresets = styles.Strapi.borderPresets.data.map((border) => {
    return {
      label: border.attributes.label,
      style: border.attributes.style,
      width: border.attributes.width,
    };
  });

  const breakpoints = styles.Strapi.breakpoints.data.map((breakpoint) => {
    return {
      label: breakpoint.attributes.label,
      width: breakpoint.attributes.width,
    };
  });

  const colorPalettes = styles.Strapi.colorPalettes.data.map((color) => {
    return {
      label: color.attributes.label,
      mode: color.attributes.mode,
      error: color.attributes.error,
      neutral: color.attributes.neutral,
      primary: color.attributes.primary,
      secondary: color.attributes.secondary,
      success: color.attributes.success,
      tertiary: color.attributes.tertiary,
      warning: color.attributes.warning,
    };
  });

  const radiusPresets = styles.Strapi.radiusPresets.data.map((radius) => {
    return {
      label: radius.attributes.label,
      value: radius.attributes.value,
    };
  });

  const textstyles = styles.Strapi.textstyles.data.map((textstyle) => {
    return {
      label: textstyle.attributes.label,
      fontfamily: textstyle.attributes.fontfamily,
      fontsize: textstyle.attributes.fontsize,
      fontweight: textstyle.attributes.fontweight,
      line_height: textstyle.attributes.line_height,
    };
  });

  const StyledWrapper = styled.div`
    /* hardcoded properties */
    display: flex;
    margin-bottom: 4px;
    flex-direction: row-reverse;
    box-sizing: border-box;
    max-width: 384px;
    min-width: 324px;
    height: 64px;
    padding: 5px;
    :hover {
      background-color: rgba(0, 0, 0, 0.05);
    }

    /* Data from strapi */
    border: ${borderPresets.find((item) => item.label === border).width}
      ${borderPresets.find((item) => item.label === border).style}
      ${colorPalettes
        .find((item) => item.neutral.find((item) => item.label === "N50"))
        .neutral.find((item) => item.label === "N50").code};

    :focus-within {
      border-color: ${colorPalettes
        .find((item) => item.primary.find((item) => item.label === "P100"))
        .primary.find((item) => item.label === "P100").code};
    }

    border-radius: ${styles.Strapi.radiusPresets.data.find(
      (item) => item.attributes.label === inputFieldRadius
    ).attributes.value};

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
    /* hardcoded properties */
    box-sizing: border-box;
    padding-left: calc(30px - 5px);
    border: none;
    outline: none;
    padding-right: 10px;
    width: 100%;
    background-color: transparent;
    /* Data from strapi */
    color: ${
      colorPalettes
        .find((item) => item.neutral.find((item) => item.label === "N50"))
        .neutral.find((item) => item.label === "N50").code
    };
    font-family: ${
      textstyles.find((item) => item.label === "H6-desktop").fontfamily
    }};

    font-size: ${
      textstyles.find((item) => item.label === "H6-desktop").fontsize
    }px;
    font-weight: ${
      textstyles.find((item) => item.label === "H6-desktop").fontweight
    };

    :placeholder {
      font-size: ${
        textstyles.find((item) => item.label === "H7-desktop").fontsize
      }px;
      line-height: ${
        textstyles.find((item) => item.label === "H7-desktop").line_height
      }; 
    }

  
    

    @media (max-width: ${
      devices.find((device) => device.label === "laptop").width
    }) {
      padding-left: calc(20px - 4px);
      font-size: ${
        textstyles.find((item) => item.label === "H6-laptop").fontsize
      }px;
      line-height: ${
        textstyles.find((item) => item.label === "H6-laptop").line_height
      }}px;
      :placeholder {
        font-size: ${
          textstyles.find((item) => item.label === "H7-laptop").fontsize
        }px;
        line-height: ${
          textstyles.find((item) => item.label === "H7-laptop").line_height
        }px;
      }
      :hover{
        color: ${
          colorPalettes
            .find((item) => item.neutral.find((item) => item.label === "N50"))
            .neutral.find((item) => item.label === "N50").code
        };
      }
    }

    @media (max-width: ${
      devices.find((device) => device.label === "mobile").width
    }) {
      padding-left: calc(20px - 4px);
      font-size: ${
        textstyles.find((item) => item.label === "H6-mobile").fontsize
      }px;
      line-height: ${
        textstyles.find((item) => item.label === "H6-mobile").line_height
      }}px;
      :placeholder {
        font-size: ${
          textstyles.find((item) => item.label === "H7-mobile").fontsize
        }px;
        line-height: ${
          textstyles.find((item) => item.label === "H7-mobile").line_height
        }px;
      }

    }
  `;
  const StyledButton = styled.button`
    /* hardcoded properties */
    box-sizing: border-box;
    min-width: 144px;
    border: none;
    font-family: "Lexend";
    cursor: pointer;
    :focus-visible {
      outline: none;
    }

    /* Data from strapi */
    border-radius: ${styles.Strapi.radiusPresets.data.find(
      (item) => item.attributes.label === buttonBorderRadius
    ).attributes.value};
    background-color: ${colorPalettes
      .find((item) => item.primary.find((item) => item.label === "P100"))
      .primary.find((item) => item.label === "P100").code};
    font-weight: ${textstyles.find((item) => item.label === "H6-desktop")
      .fontweight};
    font-size: ${textstyles.find((item) => item.label === "H6-desktop")
      .fontsize}px;
    line-height: ${textstyles.find((item) => item.label === "H6-desktop")
      .line_height}px;
    color: ${colorPalettes
      .find((item) => item.neutral.find((item) => item.label === "N0"))
      .neutral.find((item) => item.label === "N0").code};
    :active {
      background-color: ${colorPalettes
        .find((item) => item.primary.find((item) => item.label === "P120"))
        .primary.find((item) => item.label === "P120").code};
    }

    @media (max-width: ${devices.find((device) => device.label === "laptop")
        .width}) {
      font-size: ${textstyles.find((item) => item.label === "H6-laptop")
        .fontsize}px;

      line-height: ${textstyles.find((item) => item.label === "H6-laptop")
        .line_height}px;
      min-width: 100px;
    }

    @media (max-width: ${devices.find((device) => device.label === "mobile")
        .width}) {
      font-size: ${textstyles.find((item) => item.label === "H6-mobile")
        .fontsize}px;
      line-height: ${textstyles.find((item) => item.label === "H6-mobile")
        .line_height}px;
      min-width: 88px;
    }
  `;

  const StyledHelperText = styled.div`
    font-family: "Lexend";
    font-style: normal;
    font-weight: ${textstyles.find((item) => item.label === "H8-desktop")
      .fontweight};
    font-size: ${textstyles.find((item) => item.label === "H8-desktop")
      .fontsize}px;
    line-height: ${textstyles.find((item) => item.label === "H8-desktop")
      .line_height}px;
    color: ${helperText
      ? helperText.type === "error"
        ? colorPalettes
            .find((item) => item.error.find((item) => item.label === "E100"))
            .error.find((item) => item.label === "E100").code
        : helperText.type === "success"
        ? colorPalettes
            .find((item) => item.success.find((item) => item.label === "S100"))
            .success.find((item) => item.label === "S100").code
        : colorPalettes

            .find((item) => item.neutral.find((item) => item.label === "N25"))
            .neutral.find((item) => item.label === "N25").code
      : ""};

    @media (max-width: ${devices.find((device) => device.label === "laptop")
        .width}) {
      font-size: ${textstyles.find((item) => item.label === "H8-laptop")
        .fontsize}px;
      line-height: ${textstyles.find((item) => item.label === "H8-laptop")
        .line_height}px;
    }
  `;

  return (
    <>
      <StyledWrapper>
        <StyledButton disabled={disabled}>Request</StyledButton>
        <StyledInput type="text" placeholder="Input Text" disabled={disabled} />
      </StyledWrapper>
      {helperText && <StyledHelperText>{helperText.text}</StyledHelperText>}
    </>
  );
};

export default InputComponent;

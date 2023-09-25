import React from "react";
import { AlertsIcon } from "../../components/AlertsIcon";
import { FilterButton } from "../../components/FilterButton";
import { FilterButtonWrapper } from "../../components/FilterButtonWrapper";
import { MainPageIcon } from "../../components/MainPageIcon";
import { ManageBidsWAlerts } from "../../components/ManageBidsWAlerts";
import { SettingsIcon } from "../../components/SettingsIcon";
import { StarHalf } from "../../components/StarHalf";
import { StatusButton } from "../../components/StatusButton";
import { StudiesIcon } from "../../components/StudiesIcon";
import { QuestionsIcon } from "../../icons/QuestionsIcon";

export const MainDashboard = () => {
  return (
    <div className="flex flex-row justify-center w-full bg-[#4e5864]">
      <div className="bg-white w-[1440px] h-[1246px]">
        <div className="relative h-[1246px]">
          <div className="absolute w-[1440px] h-[1246px] top-0 left-0">
            <div className="absolute w-[106px] h-[1246px] top-0 left-0 bg-[#0050b3]" />
            <div className="absolute w-[12px] h-[58px] top-[353px] left-0 bg-[rgb(102,150,209)] rounded-[8px]" />
            <MainPageIcon className="!absolute !left-[39px] !top-[368px]" />
            <QuestionsIcon className="cursor-pointer !absolute !w-[24px] !h-[24px] !top-[1102px] !left-[41px]" />
            <img
              className="absolute w-[71px] h-px top-[786px] left-[18px] object-cover"
              alt="Divide line"
              src="https://c.animaapp.com/U7DZF6MV/img/divide-line-1.svg"
            />
            <img
              className="absolute w-[71px] h-px top-[298px] left-[18px] object-cover"
              alt="Divide line"
              src="https://c.animaapp.com/U7DZF6MV/img/divide-line-1.svg"
            />

            <div className="absolute top-[206px] left-[15px] [font-family:'Inter',Helvetica] font-medium text-grey-grey-1 text-[16px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
              Dr. Venter
            </div>
            <img
              className="absolute w-[62px] h-[62px] top-[120px] left-[22px]"
              alt="Profile"
              src="https://c.animaapp.com/U7DZF6MV/img/profile.svg"
            />
            <AlertsIcon
              alertsIcon="https://c.animaapp.com/U7DZF6MV/img/alerts-icon.svg"
              className="!left-[41px] !top-[533px]"
            />
            <StudiesIcon className="!absolute !left-[41px] !top-[622px]" />
            <StarHalf className="!left-[41px] !top-[702px]" />
            <SettingsIcon className="!absolute !left-[39px] !top-[820px]" />
            <ManageBidsWAlerts className="!absolute !left-[39px] !top-[446px]" />
          </div>
          <div className="cursor-pointer absolute w-[79px] h-[40px] top-[1094px] left-[151px] bg-white rounded-[3px] border border-solid border-grey-grey-6">
            <div className=" absolute w-[65px] top-[10px] left-[6px] [font-family:'Inter',Helvetica] font-bold text-x333333-dark-grey text-[14px] text-center tracking-[0] leading-[normal]">
              Previous
            </div>
          </div>
          <div className="cursor-pointer absolute w-[79px] h-[40px] top-[1094px] left-[468px] bg-white rounded-[3px] border border-solid border-grey-grey-6">
            <div className="absolute w-[65px] top-[10px] left-[6px] [font-family:'Inter',Helvetica] font-bold text-x333333-dark-grey text-[14px] text-center tracking-[0] leading-[normal]">
              Next
            </div>
          </div>
          <div className="cursor-pointer absolute w-[35px] h-[40px] top-[1094px] left-[234px] bg-[#0050b3] rounded-[3px]">
            <div className="w-[16px] top-[11px] left-[10px] [font-family:'Inter',Helvetica] font-bold text-white text-[14px] text-center absolute tracking-[0] leading-[normal]">
              1
            </div>
          </div>
          <div className="cursor-pointer absolute w-[35px] h-[40px] top-[1094px] left-[273px] bg-white rounded-[3px] border border-solid border-grey-grey-6">
            <div className="absolute w-[16px] top-[10px] left-[9px] [font-family:'Inter',Helvetica] font-bold text-x333333-dark-grey text-[14px] text-center tracking-[0] leading-[normal]">
              2
            </div>
          </div>
          <div className="cursor-pointer absolute w-[35px] h-[40px] top-[1094px] left-[312px] bg-white rounded-[3px] border border-solid border-grey-grey-6">
            <div className="absolute w-[16px] top-[10px] left-[9px] [font-family:'Inter',Helvetica] font-bold text-x333333-dark-grey text-[14px] text-center tracking-[0] leading-[normal]">
              3
            </div>
          </div>
          <div className="cursor-pointer absolute w-[35px] h-[40px] top-[1094px] left-[351px] bg-white rounded-[3px] border border-solid border-grey-grey-6">
            <div className="absolute w-[16px] top-[10px] left-[9px] [font-family:'Inter',Helvetica] font-bold text-x333333-dark-grey text-[14px] text-center tracking-[0] leading-[normal]">
              4
            </div>
          </div>
          <div className="cursor-pointer absolute w-[35px] h-[40px] top-[1094px] left-[390px] bg-white rounded-[3px] border border-solid border-grey-grey-6">
            <img
              className="absolute w-[20px] h-[4px] top-[18px] left-[7px]"
              alt="Shape more"
              src="https://c.animaapp.com/U7DZF6MV/img/shape-more-9.svg"
            />
          </div>
          <div className="cursor-pointer absolute w-[35px] h-[40px] top-[1094px] left-[429px] bg-white rounded-[3px] border border-solid border-grey-grey-6">
            <div className="absolute w-[16px] top-[10px] left-[9px] [font-family:'Inter',Helvetica] font-bold text-x333333-dark-grey text-[14px] text-center tracking-[0] leading-[normal]">
              8
            </div>
          </div>
          <div className="absolute w-[35px] h-[40px] top-[1094px] left-[1324px] bg-white rounded-[3px] border border-solid border-grey-grey-6" />
          <div className="cursor-pointer absolute w-[35px] h-[40px] top-[1094px] left-[1363px] bg-[#0050b3] rounded-[3px]">
            <div className="absolute w-[30px] top-[12px] left-[3px] [font-family:'Inter',Helvetica] font-bold text-white text-[14px] text-center tracking-[0] leading-[normal]">
              GO
            </div>
          </div>
          <div className="absolute w-[65px] top-[1106px] left-[1022px] [font-family:'Inter',Helvetica] font-bold text-x333333-dark-grey text-[14px] text-center tracking-[0] leading-[normal]">
            Per Page
          </div>
          <p className="absolute w-[143px] top-[1106px] left-[1170px] [font-family:'Inter',Helvetica] font-bold text-x333333-dark-grey text-[14px] text-center tracking-[0] leading-[normal]">
            Showing 1 to 9 of 22
          </p>
          <div className="cursor-pointer absolute w-[62px] h-[38px] top-[1096px] left-[1098px] bg-white rounded-[3px] border border-solid border-grey-grey-6">
            <div className="w-[30px] top-[9px] left-[6px] [font-family:'Inter',Helvetica] font-bold text-x333333-dark-grey text-[14px] text-center absolute tracking-[0] leading-[normal]">
              09
            </div>
            <img
              className="absolute w-[11px] h-[10px] top-[14px] left-[38px]"
              alt="Down chevron"
              src="https://c.animaapp.com/U7DZF6MV/img/down-chevron.svg"
            />
          </div>
          <div className="absolute top-[107px] left-[150px] [font-family:'Inter',Helvetica] font-bold text-daybreak-blue-blue-8 text-[36px] tracking-[0] leading-[normal]">
            Current Projects
          </div>
          <div className="absolute top-[222px] left-[151px] [font-family:'Inter',Helvetica] font-bold text-x333333-dark-grey text-[14px] tracking-[0.70px] leading-[normal]">
            BIDS
          </div>
          <div className="absolute w-[166px] top-[222px] left-[470px] [font-family:'Inter',Helvetica] font-bold text-x333333-dark-grey text-[14px] tracking-[0.70px] leading-[normal]">
            THERAPEUTIC AREA
          </div>
          <div className="absolute w-[98px] top-[205px] left-[720px] [font-family:'Inter',Helvetica] font-bold text-x333333-dark-grey text-[14px] tracking-[0.70px] leading-[normal]">
            PROTOCOL NO./TITLE
          </div>
          <div className="absolute w-[128px] top-[222px] left-[1150px] [font-family:'Inter',Helvetica] font-bold text-x333333-dark-grey text-[14px] tracking-[0.70px] leading-[normal]">
            MODIFIED DATE
          </div>
          <div className="absolute top-[222px] left-[1329px] [font-family:'Inter',Helvetica] font-bold text-x333333-dark-grey text-[14px] text-center tracking-[0.70px] leading-[normal]">
            ACTIONS
          </div>
          <div className="absolute top-[222px] left-[872px] [font-family:'Inter',Helvetica] font-bold text-x333333-dark-grey text-[14px] tracking-[0.70px] leading-[normal]">
            PHASE
          </div>
          <div className="absolute top-[222px] left-[990px] [font-family:'Inter',Helvetica] font-bold text-x333333-dark-grey text-[14px] tracking-[0.70px] leading-[normal]">
            SERVICE LIST
          </div>
          <div className="absolute top-[222px] left-[306px] [font-family:'Inter',Helvetica] font-bold text-x333333-dark-grey text-[14px] tracking-[0.70px] leading-[normal]">
            NAME
          </div>
          <div className=" absolute w-[336px] h-[40px] top-[112px] left-[549px]">
            <div className="relative w-[338px] h-[40px]">
              <button className="cursor-pointer w-[82px] left-[256px] absolute h-[40px] top-0 all-[unset] box-border">
                <div className="relative w-[80px] h-[40px] bg-daybreak-blue-blue-8 rounded-[0px_3px_3px_0px]">
                  <div className="absolute w-[52px] top-[11px] left-[19px] [font-family:'Inter',Helvetica] font-bold text-white text-[14px] tracking-[0] leading-[normal]">
                    Search
                  </div>
                </div>
              </button>
              <div className="w-[258px] left-0 absolute h-[40px] top-0">
                <div className="relative w-[256px] h-[40px] bg-grey-grey-1 rounded-[3px_0px_0px_3px] border border-solid border-grey-grey-6">
                  <div className="absolute w-[212px] h-[24px] top-[7px] left-[31px] [font-family:'Inter',Helvetica] font-normal text-grey-grey-6 text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
                    Enter a keyword
                  </div>
                  <img
                    className="absolute w-[14px] h-[14px] top-[12px] left-[11px]"
                    alt="Vector"
                    src="https://c.animaapp.com/U7DZF6MV/img/vector.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <FilterButton
            className="!absolute !left-[993px] !top-[112px]"
            icon="https://c.animaapp.com/U7DZF6MV/img/icon.svg"
          />
          <FilterButtonWrapper className="!absolute !left-[1301px] !top-[112px]" />
          <div className="absolute w-[1333px] h-[94px] top-[916px] left-[107px]">
            <div className="absolute w-[1333px] h-[94px] top-0 left-0">
              <div className="relative h-[94px] bg-primary-cta-text rounded-[3px]">
                <StatusButton
                  className="!absolute !left-[41px] !bg-open-bids !top-[33px]"
                  divClassName="!text-primary-cta-text !tracking-[var(--inter-regular-14px-letter-spacing)] !text-[length:var(--inter-regular-14px-font-size)] ![font-style:var(--inter-regular-14px-font-style)] !font-[number:var(--inter-regular-14px-font-weight)] !font-inter-regular-14px !leading-[var(--inter-regular-14px-line-height)]"
                />
                <p className="absolute w-[197px] top-[14px] left-[363px] font-inter-regular-16px font-[number:var(--inter-regular-16px-font-weight)] text-primary-text text-[length:var(--inter-regular-16px-font-size)] tracking-[var(--inter-regular-16px-letter-spacing)] leading-[var(--inter-regular-16px-line-height)] [font-style:var(--inter-regular-16px-font-style)]">
                  Inflammation
                  <br />
                  Indication: Back pain
                  <br />
                  Molecular type: Chemical
                </p>
                <div className="absolute w-[122px] h-[25px] top-[34px] left-[193px]">
                  <div className="absolute w-[120px] h-[25px] top-0 left-0 font-inter-regular-16px font-[number:var(--inter-regular-16px-font-weight)] text-primary-text text-[length:var(--inter-regular-16px-font-size)] tracking-[var(--inter-regular-16px-letter-spacing)] leading-[var(--inter-regular-16px-line-height)] [font-style:var(--inter-regular-16px-font-style)]">
                    Second study
                  </div>
                </div>
                <div className="absolute w-[113px] top-[23px] left-[1043px] font-inter-regular-16px font-[number:var(--inter-regular-16px-font-weight)] text-primary-text text-[length:var(--inter-regular-16px-font-size)] tracking-[var(--inter-regular-16px-letter-spacing)] leading-[var(--inter-regular-16px-line-height)] [font-style:var(--inter-regular-16px-font-style)]">
                  April 19, 2019
                  <br />
                  07:09:50 am
                </div>
                <div className="w-[7px] top-[38px] left-[978px] font-inter-regular-16px font-[number:var(--inter-regular-16px-font-weight)] text-primary-text text-[length:var(--inter-regular-16px-font-size)] text-center whitespace-nowrap absolute tracking-[var(--inter-regular-16px-letter-spacing)] leading-[var(--inter-regular-16px-line-height)] [font-style:var(--inter-regular-16px-font-style)]">
                  1
                </div>
                <div className="absolute w-[106px] top-[27px] left-[613px] font-inter-regular-16px font-[number:var(--inter-regular-16px-font-weight)] text-primary-text text-[length:var(--inter-regular-16px-font-size)] tracking-[var(--inter-regular-16px-letter-spacing)] leading-[var(--inter-regular-16px-line-height)] [font-style:var(--inter-regular-16px-font-style)]">
                  ABZ-123
                  <br />
                  Title: Atest
                </div>
                <div className="absolute top-[38px] left-[813px] font-inter-regular-16px font-[number:var(--inter-regular-16px-font-weight)] text-primary-text text-[length:var(--inter-regular-16px-font-size)] tracking-[var(--inter-regular-16px-letter-spacing)] leading-[var(--inter-regular-16px-line-height)] whitespace-nowrap [font-style:var(--inter-regular-16px-font-style)]">
                  I
                </div>
                <img
                  className="absolute w-[20px] h-[4px] top-[45px] left-[1248px]"
                  alt="Shape more"
                  src="https://c.animaapp.com/U7DZF6MV/img/shape-more-8.svg"
                />
              </div>
            </div>
            <div className="absolute w-[1333px] h-[94px] top-0 left-0">
              <div className="relative h-[94px] bg-primary-cta-text rounded-[3px]">
                <StatusButton
                  className="!absolute !left-[41px] !bg-open-bids !top-[33px]"
                  divClassName="!text-primary-cta-text !tracking-[var(--inter-regular-14px-letter-spacing)] !text-[length:var(--inter-regular-14px-font-size)] ![font-style:var(--inter-regular-14px-font-style)] !font-[number:var(--inter-regular-14px-font-weight)] !font-inter-regular-14px !leading-[var(--inter-regular-14px-line-height)]"
                />
                <p className="absolute w-[197px] top-[14px] left-[363px] font-inter-regular-16px font-[number:var(--inter-regular-16px-font-weight)] text-primary-text text-[length:var(--inter-regular-16px-font-size)] tracking-[var(--inter-regular-16px-letter-spacing)] leading-[var(--inter-regular-16px-line-height)] [font-style:var(--inter-regular-16px-font-style)]">
                  Inflammation
                  <br />
                  Indication: Back pain
                  <br />
                  Molecular type: Chemical
                </p>
                <div className="absolute w-[122px] h-[25px] top-[34px] left-[193px]">
                  <div className="absolute w-[120px] h-[25px] top-0 left-0 font-inter-regular-16px font-[number:var(--inter-regular-16px-font-weight)] text-primary-text text-[length:var(--inter-regular-16px-font-size)] tracking-[var(--inter-regular-16px-letter-spacing)] leading-[var(--inter-regular-16px-line-height)] [font-style:var(--inter-regular-16px-font-style)]">
                    Second study
                  </div>
                </div>
                <div className="absolute w-[113px] top-[23px] left-[1043px] font-inter-regular-16px font-[number:var(--inter-regular-16px-font-weight)] text-primary-text text-[length:var(--inter-regular-16px-font-size)] tracking-[var(--inter-regular-16px-letter-spacing)] leading-[var(--inter-regular-16px-line-height)] [font-style:var(--inter-regular-16px-font-style)]">
                  April 19, 2019
                  <br />
                  07:09:50 am
                </div>
                <div className="w-[7px] top-[38px] left-[978px] font-inter-regular-16px font-[number:var(--inter-regular-16px-font-weight)] text-primary-text text-[length:var(--inter-regular-16px-font-size)] text-center whitespace-nowrap absolute tracking-[var(--inter-regular-16px-letter-spacing)] leading-[var(--inter-regular-16px-line-height)] [font-style:var(--inter-regular-16px-font-style)]">
                  1
                </div>
                <div className="absolute w-[106px] top-[27px] left-[613px] font-inter-regular-16px font-[number:var(--inter-regular-16px-font-weight)] text-primary-text text-[length:var(--inter-regular-16px-font-size)] tracking-[var(--inter-regular-16px-letter-spacing)] leading-[var(--inter-regular-16px-line-height)] [font-style:var(--inter-regular-16px-font-style)]">
                  ABZ-123
                  <br />
                  Title: Atest
                </div>
                <div className="absolute top-[38px] left-[813px] font-inter-regular-16px font-[number:var(--inter-regular-16px-font-weight)] text-primary-text text-[length:var(--inter-regular-16px-font-size)] tracking-[var(--inter-regular-16px-letter-spacing)] leading-[var(--inter-regular-16px-line-height)] whitespace-nowrap [font-style:var(--inter-regular-16px-font-style)]">
                  I
                </div>
                <img
                  className="absolute w-[20px] h-[4px] top-[45px] left-[1248px]"
                  alt="Shape more"
                  src="https://c.animaapp.com/U7DZF6MV/img/shape-more-8.svg"
                />
              </div>
            </div>
          </div>
          <div className="absolute w-[1333px] h-[94px] top-[822px] left-[107px]">
            <div className="relative h-[94px] bg-primary-cta-text rounded-[3px]">
              <StatusButton
                className="!absolute !left-[41px] !bg-open-bids !top-[33px]"
                divClassName="!text-primary-cta-text !tracking-[var(--inter-regular-14px-letter-spacing)] !text-[length:var(--inter-regular-14px-font-size)] ![font-style:var(--inter-regular-14px-font-style)] !font-[number:var(--inter-regular-14px-font-weight)] !font-inter-regular-14px !leading-[var(--inter-regular-14px-line-height)]"
              />
              <p className="absolute w-[197px] top-[14px] left-[363px] font-inter-regular-16px font-[number:var(--inter-regular-16px-font-weight)] text-primary-text text-[length:var(--inter-regular-16px-font-size)] tracking-[var(--inter-regular-16px-letter-spacing)] leading-[var(--inter-regular-16px-line-height)] [font-style:var(--inter-regular-16px-font-style)]">
                Inflammation
                <br />
                Indication: Back pain
                <br />
                Molecular type: Chemical
              </p>
              <div className="absolute w-[122px] h-[25px] top-[34px] left-[193px]">
                <div className="absolute w-[120px] h-[25px] top-0 left-0 font-inter-regular-16px font-[number:var(--inter-regular-16px-font-weight)] text-primary-text text-[length:var(--inter-regular-16px-font-size)] tracking-[var(--inter-regular-16px-letter-spacing)] leading-[var(--inter-regular-16px-line-height)] [font-style:var(--inter-regular-16px-font-style)]">
                  Second study
                </div>
              </div>
              <div className="absolute w-[113px] top-[23px] left-[1043px] font-inter-regular-16px font-[number:var(--inter-regular-16px-font-weight)] text-primary-text text-[length:var(--inter-regular-16px-font-size)] tracking-[var(--inter-regular-16px-letter-spacing)] leading-[var(--inter-regular-16px-line-height)] [font-style:var(--inter-regular-16px-font-style)]">
                April 19, 2019
                <br />
                07:09:50 am
              </div>
              <div className="w-[7px] top-[38px] left-[978px] font-inter-regular-16px font-[number:var(--inter-regular-16px-font-weight)] text-primary-text text-[length:var(--inter-regular-16px-font-size)] text-center whitespace-nowrap absolute tracking-[var(--inter-regular-16px-letter-spacing)] leading-[var(--inter-regular-16px-line-height)] [font-style:var(--inter-regular-16px-font-style)]">
                1
              </div>
              <div className="absolute w-[106px] top-[27px] left-[613px] font-inter-regular-16px font-[number:var(--inter-regular-16px-font-weight)] text-primary-text text-[length:var(--inter-regular-16px-font-size)] tracking-[var(--inter-regular-16px-letter-spacing)] leading-[var(--inter-regular-16px-line-height)] [font-style:var(--inter-regular-16px-font-style)]">
                ABZ-123
                <br />
                Title: Atest
              </div>
              <div className="absolute top-[38px] left-[813px] font-inter-regular-16px font-[number:var(--inter-regular-16px-font-weight)] text-primary-text text-[length:var(--inter-regular-16px-font-size)] tracking-[var(--inter-regular-16px-letter-spacing)] leading-[var(--inter-regular-16px-line-height)] whitespace-nowrap [font-style:var(--inter-regular-16px-font-style)]">
                I
              </div>
              <img
                className="absolute w-[20px] h-[4px] top-[45px] left-[1248px]"
                alt="Shape more"
                src="https://c.animaapp.com/U7DZF6MV/img/shape-more-8.svg"
              />
            </div>
          </div>
          <div className="absolute w-[1333px] h-[94px] top-[728px] left-[107px]">
            <div className="relative h-[94px] bg-primary-cta-text rounded-[3px]">
              <StatusButton
                className="!absolute !left-[41px] !bg-open-bids !top-[33px]"
                divClassName="!text-primary-cta-text !tracking-[var(--inter-regular-14px-letter-spacing)] !text-[length:var(--inter-regular-14px-font-size)] ![font-style:var(--inter-regular-14px-font-style)] !font-[number:var(--inter-regular-14px-font-weight)] !font-inter-regular-14px !leading-[var(--inter-regular-14px-line-height)]"
              />
              <p className="absolute w-[197px] top-[14px] left-[363px] font-inter-regular-16px font-[number:var(--inter-regular-16px-font-weight)] text-primary-text text-[length:var(--inter-regular-16px-font-size)] tracking-[var(--inter-regular-16px-letter-spacing)] leading-[var(--inter-regular-16px-line-height)] [font-style:var(--inter-regular-16px-font-style)]">
                Inflammation
                <br />
                Indication: Back pain
                <br />
                Molecular type: Chemical
              </p>
              <div className="absolute w-[122px] h-[25px] top-[34px] left-[193px]">
                <div className="absolute w-[120px] h-[25px] top-0 left-0 font-inter-regular-16px font-[number:var(--inter-regular-16px-font-weight)] text-primary-text text-[length:var(--inter-regular-16px-font-size)] tracking-[var(--inter-regular-16px-letter-spacing)] leading-[var(--inter-regular-16px-line-height)] [font-style:var(--inter-regular-16px-font-style)]">
                  Second study
                </div>
              </div>
              <div className="absolute w-[113px] top-[23px] left-[1043px] font-inter-regular-16px font-[number:var(--inter-regular-16px-font-weight)] text-primary-text text-[length:var(--inter-regular-16px-font-size)] tracking-[var(--inter-regular-16px-letter-spacing)] leading-[var(--inter-regular-16px-line-height)] [font-style:var(--inter-regular-16px-font-style)]">
                April 19, 2019
                <br />
                07:09:50 am
              </div>
              <div className="w-[7px] top-[38px] left-[978px] font-inter-regular-16px font-[number:var(--inter-regular-16px-font-weight)] text-primary-text text-[length:var(--inter-regular-16px-font-size)] text-center whitespace-nowrap absolute tracking-[var(--inter-regular-16px-letter-spacing)] leading-[var(--inter-regular-16px-line-height)] [font-style:var(--inter-regular-16px-font-style)]">
                1
              </div>
              <div className="absolute w-[106px] top-[27px] left-[613px] font-inter-regular-16px font-[number:var(--inter-regular-16px-font-weight)] text-primary-text text-[length:var(--inter-regular-16px-font-size)] tracking-[var(--inter-regular-16px-letter-spacing)] leading-[var(--inter-regular-16px-line-height)] [font-style:var(--inter-regular-16px-font-style)]">
                ABZ-123
                <br />
                Title: Atest
              </div>
              <div className="absolute top-[38px] left-[813px] font-inter-regular-16px font-[number:var(--inter-regular-16px-font-weight)] text-primary-text text-[length:var(--inter-regular-16px-font-size)] tracking-[var(--inter-regular-16px-letter-spacing)] leading-[var(--inter-regular-16px-line-height)] whitespace-nowrap [font-style:var(--inter-regular-16px-font-style)]">
                I
              </div>
              <img
                className="absolute w-[20px] h-[4px] top-[45px] left-[1248px]"
                alt="Shape more"
                src="https://c.animaapp.com/U7DZF6MV/img/shape-more-8.svg"
              />
            </div>
          </div>
          <div className="absolute w-[1333px] h-[94px] top-[634px] left-[107px]">
            <div className="relative h-[94px] bg-primary-cta-text rounded-[3px]">
              <StatusButton
                className="!absolute !left-[41px] !bg-open-bids !top-[33px]"
                divClassName="!text-primary-cta-text !tracking-[var(--inter-regular-14px-letter-spacing)] !text-[length:var(--inter-regular-14px-font-size)] ![font-style:var(--inter-regular-14px-font-style)] !font-[number:var(--inter-regular-14px-font-weight)] !font-inter-regular-14px !leading-[var(--inter-regular-14px-line-height)]"
              />
              <p className="absolute w-[197px] top-[14px] left-[363px] font-inter-regular-16px font-[number:var(--inter-regular-16px-font-weight)] text-primary-text text-[length:var(--inter-regular-16px-font-size)] tracking-[var(--inter-regular-16px-letter-spacing)] leading-[var(--inter-regular-16px-line-height)] [font-style:var(--inter-regular-16px-font-style)]">
                Inflammation
                <br />
                Indication: Back pain
                <br />
                Molecular type: Chemical
              </p>
              <div className="absolute w-[122px] h-[25px] top-[34px] left-[193px]">
                <div className="absolute w-[120px] h-[25px] top-0 left-0 font-inter-regular-16px font-[number:var(--inter-regular-16px-font-weight)] text-primary-text text-[length:var(--inter-regular-16px-font-size)] tracking-[var(--inter-regular-16px-letter-spacing)] leading-[var(--inter-regular-16px-line-height)] [font-style:var(--inter-regular-16px-font-style)]">
                  Second study
                </div>
              </div>
              <div className="absolute w-[113px] top-[23px] left-[1043px] font-inter-regular-16px font-[number:var(--inter-regular-16px-font-weight)] text-primary-text text-[length:var(--inter-regular-16px-font-size)] tracking-[var(--inter-regular-16px-letter-spacing)] leading-[var(--inter-regular-16px-line-height)] [font-style:var(--inter-regular-16px-font-style)]">
                April 19, 2019
                <br />
                07:09:50 am
              </div>
              <div className="w-[7px] top-[38px] left-[978px] font-inter-regular-16px font-[number:var(--inter-regular-16px-font-weight)] text-primary-text text-[length:var(--inter-regular-16px-font-size)] text-center whitespace-nowrap absolute tracking-[var(--inter-regular-16px-letter-spacing)] leading-[var(--inter-regular-16px-line-height)] [font-style:var(--inter-regular-16px-font-style)]">
                1
              </div>
              <div className="absolute w-[106px] top-[27px] left-[613px] font-inter-regular-16px font-[number:var(--inter-regular-16px-font-weight)] text-primary-text text-[length:var(--inter-regular-16px-font-size)] tracking-[var(--inter-regular-16px-letter-spacing)] leading-[var(--inter-regular-16px-line-height)] [font-style:var(--inter-regular-16px-font-style)]">
                ABZ-123
                <br />
                Title: Atest
              </div>
              <div className="absolute top-[38px] left-[813px] font-inter-regular-16px font-[number:var(--inter-regular-16px-font-weight)] text-primary-text text-[length:var(--inter-regular-16px-font-size)] tracking-[var(--inter-regular-16px-letter-spacing)] leading-[var(--inter-regular-16px-line-height)] whitespace-nowrap [font-style:var(--inter-regular-16px-font-style)]">
                I
              </div>
              <img
                className="absolute w-[20px] h-[4px] top-[45px] left-[1248px]"
                alt="Shape more"
                src="https://c.animaapp.com/U7DZF6MV/img/shape-more-8.svg"
              />
            </div>
          </div>
          <div className="absolute w-[1333px] h-[94px] top-[540px] left-[107px]">
            <div className="relative h-[94px] bg-primary-cta-text rounded-[3px]">
              <StatusButton
                className="!absolute !left-[41px] !bg-open-bids !top-[33px]"
                divClassName="!text-primary-cta-text !tracking-[var(--inter-regular-14px-letter-spacing)] !text-[length:var(--inter-regular-14px-font-size)] ![font-style:var(--inter-regular-14px-font-style)] !font-[number:var(--inter-regular-14px-font-weight)] !font-inter-regular-14px !leading-[var(--inter-regular-14px-line-height)]"
              />
              <p className="absolute w-[197px] top-[14px] left-[363px] font-inter-regular-16px font-[number:var(--inter-regular-16px-font-weight)] text-primary-text text-[length:var(--inter-regular-16px-font-size)] tracking-[var(--inter-regular-16px-letter-spacing)] leading-[var(--inter-regular-16px-line-height)] [font-style:var(--inter-regular-16px-font-style)]">
                Inflammation
                <br />
                Indication: Back pain
                <br />
                Molecular type: Chemical
              </p>
              <div className="absolute w-[122px] h-[25px] top-[34px] left-[193px]">
                <div className="absolute w-[120px] h-[25px] top-0 left-0 font-inter-regular-16px font-[number:var(--inter-regular-16px-font-weight)] text-primary-text text-[length:var(--inter-regular-16px-font-size)] tracking-[var(--inter-regular-16px-letter-spacing)] leading-[var(--inter-regular-16px-line-height)] [font-style:var(--inter-regular-16px-font-style)]">
                  Second study
                </div>
              </div>
              <div className="absolute w-[113px] top-[23px] left-[1043px] font-inter-regular-16px font-[number:var(--inter-regular-16px-font-weight)] text-primary-text text-[length:var(--inter-regular-16px-font-size)] tracking-[var(--inter-regular-16px-letter-spacing)] leading-[var(--inter-regular-16px-line-height)] [font-style:var(--inter-regular-16px-font-style)]">
                April 19, 2019
                <br />
                07:09:50 am
              </div>
              <div className="w-[7px] top-[38px] left-[978px] font-inter-regular-16px font-[number:var(--inter-regular-16px-font-weight)] text-primary-text text-[length:var(--inter-regular-16px-font-size)] text-center whitespace-nowrap absolute tracking-[var(--inter-regular-16px-letter-spacing)] leading-[var(--inter-regular-16px-line-height)] [font-style:var(--inter-regular-16px-font-style)]">
                1
              </div>
              <div className="absolute w-[106px] top-[27px] left-[613px] font-inter-regular-16px font-[number:var(--inter-regular-16px-font-weight)] text-primary-text text-[length:var(--inter-regular-16px-font-size)] tracking-[var(--inter-regular-16px-letter-spacing)] leading-[var(--inter-regular-16px-line-height)] [font-style:var(--inter-regular-16px-font-style)]">
                ABZ-123
                <br />
                Title: Atest
              </div>
              <div className="absolute top-[38px] left-[813px] font-inter-regular-16px font-[number:var(--inter-regular-16px-font-weight)] text-primary-text text-[length:var(--inter-regular-16px-font-size)] tracking-[var(--inter-regular-16px-letter-spacing)] leading-[var(--inter-regular-16px-line-height)] whitespace-nowrap [font-style:var(--inter-regular-16px-font-style)]">
                I
              </div>
              <img
                className="absolute w-[20px] h-[4px] top-[45px] left-[1248px]"
                alt="Shape more"
                src="https://c.animaapp.com/U7DZF6MV/img/shape-more-8.svg"
              />
            </div>
          </div>
          <div className="absolute w-[1333px] h-[94px] top-[446px] left-[107px]">
            <div className="relative h-[94px] bg-primary-cta-text rounded-[3px]">
              <StatusButton
                className="!absolute !left-[41px] !bg-active-bids !top-[33px]"
                divClassName="!text-primary-cta-text !tracking-[var(--inter-regular-14px-letter-spacing)] !text-[length:var(--inter-regular-14px-font-size)] ![font-style:var(--inter-regular-14px-font-style)] !font-[number:var(--inter-regular-14px-font-weight)] !font-inter-regular-14px !leading-[var(--inter-regular-14px-line-height)]"
              />
              <p className="absolute w-[197px] top-[14px] left-[363px] font-inter-regular-16px font-[number:var(--inter-regular-16px-font-weight)] text-primary-text text-[length:var(--inter-regular-16px-font-size)] tracking-[var(--inter-regular-16px-letter-spacing)] leading-[var(--inter-regular-16px-line-height)] [font-style:var(--inter-regular-16px-font-style)]">
                Inflammation
                <br />
                Indication: Back pain
                <br />
                Molecular type: Chemical
              </p>
              <div className="absolute w-[122px] h-[25px] top-[34px] left-[193px]">
                <div className="absolute w-[120px] h-[25px] top-0 left-0 font-inter-regular-16px font-[number:var(--inter-regular-16px-font-weight)] text-primary-text text-[length:var(--inter-regular-16px-font-size)] tracking-[var(--inter-regular-16px-letter-spacing)] leading-[var(--inter-regular-16px-line-height)] [font-style:var(--inter-regular-16px-font-style)]">
                  Second study
                </div>
              </div>
              <div className="absolute w-[113px] top-[23px] left-[1043px] font-inter-regular-16px font-[number:var(--inter-regular-16px-font-weight)] text-primary-text text-[length:var(--inter-regular-16px-font-size)] tracking-[var(--inter-regular-16px-letter-spacing)] leading-[var(--inter-regular-16px-line-height)] [font-style:var(--inter-regular-16px-font-style)]">
                April 19, 2019
                <br />
                07:09:50 am
              </div>
              <div className="w-[7px] top-[38px] left-[978px] font-inter-regular-16px font-[number:var(--inter-regular-16px-font-weight)] text-primary-text text-[length:var(--inter-regular-16px-font-size)] text-center whitespace-nowrap absolute tracking-[var(--inter-regular-16px-letter-spacing)] leading-[var(--inter-regular-16px-line-height)] [font-style:var(--inter-regular-16px-font-style)]">
                1
              </div>
              <div className="absolute w-[106px] top-[27px] left-[613px] font-inter-regular-16px font-[number:var(--inter-regular-16px-font-weight)] text-primary-text text-[length:var(--inter-regular-16px-font-size)] tracking-[var(--inter-regular-16px-letter-spacing)] leading-[var(--inter-regular-16px-line-height)] [font-style:var(--inter-regular-16px-font-style)]">
                ABZ-123
                <br />
                Title: Atest
              </div>
              <div className="absolute top-[38px] left-[813px] font-inter-regular-16px font-[number:var(--inter-regular-16px-font-weight)] text-primary-text text-[length:var(--inter-regular-16px-font-size)] tracking-[var(--inter-regular-16px-letter-spacing)] leading-[var(--inter-regular-16px-line-height)] whitespace-nowrap [font-style:var(--inter-regular-16px-font-style)]">
                I
              </div>
              <img
                className="absolute w-[20px] h-[4px] top-[45px] left-[1248px]"
                alt="Shape more"
                src="https://c.animaapp.com/U7DZF6MV/img/shape-more-8.svg"
              />
            </div>
          </div>
          <div className="absolute w-[1333px] h-[94px] top-[352px] left-[107px]">
            <div className="relative h-[94px] bg-primary-cta-text rounded-[3px]">
              <StatusButton
                className="!absolute !left-[41px] !bg-open-bids !top-[33px]"
                divClassName="!text-primary-cta-text !tracking-[var(--inter-regular-14px-letter-spacing)] !text-[length:var(--inter-regular-14px-font-size)] ![font-style:var(--inter-regular-14px-font-style)] !font-[number:var(--inter-regular-14px-font-weight)] !font-inter-regular-14px !leading-[var(--inter-regular-14px-line-height)]"
              />
              <p className="absolute w-[197px] top-[14px] left-[363px] font-inter-regular-16px font-[number:var(--inter-regular-16px-font-weight)] text-primary-text text-[length:var(--inter-regular-16px-font-size)] tracking-[var(--inter-regular-16px-letter-spacing)] leading-[var(--inter-regular-16px-line-height)] [font-style:var(--inter-regular-16px-font-style)]">
                Inflammation
                <br />
                Indication: Back pain
                <br />
                Molecular type: Chemical
              </p>
              <div className="absolute w-[122px] h-[25px] top-[34px] left-[193px]">
                <div className="absolute w-[120px] h-[25px] top-0 left-0 font-inter-regular-16px font-[number:var(--inter-regular-16px-font-weight)] text-primary-text text-[length:var(--inter-regular-16px-font-size)] tracking-[var(--inter-regular-16px-letter-spacing)] leading-[var(--inter-regular-16px-line-height)] [font-style:var(--inter-regular-16px-font-style)]">
                  Second study
                </div>
              </div>
              <div className="absolute w-[113px] top-[23px] left-[1043px] font-inter-regular-16px font-[number:var(--inter-regular-16px-font-weight)] text-primary-text text-[length:var(--inter-regular-16px-font-size)] tracking-[var(--inter-regular-16px-letter-spacing)] leading-[var(--inter-regular-16px-line-height)] [font-style:var(--inter-regular-16px-font-style)]">
                April 19, 2019
                <br />
                07:09:50 am
              </div>
              <div className="w-[7px] top-[38px] left-[978px] font-inter-regular-16px font-[number:var(--inter-regular-16px-font-weight)] text-primary-text text-[length:var(--inter-regular-16px-font-size)] text-center whitespace-nowrap absolute tracking-[var(--inter-regular-16px-letter-spacing)] leading-[var(--inter-regular-16px-line-height)] [font-style:var(--inter-regular-16px-font-style)]">
                1
              </div>
              <div className="absolute w-[106px] top-[27px] left-[613px] font-inter-regular-16px font-[number:var(--inter-regular-16px-font-weight)] text-primary-text text-[length:var(--inter-regular-16px-font-size)] tracking-[var(--inter-regular-16px-letter-spacing)] leading-[var(--inter-regular-16px-line-height)] [font-style:var(--inter-regular-16px-font-style)]">
                ABZ-123
                <br />
                Title: Atest
              </div>
              <div className="absolute top-[38px] left-[813px] font-inter-regular-16px font-[number:var(--inter-regular-16px-font-weight)] text-primary-text text-[length:var(--inter-regular-16px-font-size)] tracking-[var(--inter-regular-16px-letter-spacing)] leading-[var(--inter-regular-16px-line-height)] whitespace-nowrap [font-style:var(--inter-regular-16px-font-style)]">
                I
              </div>
              <img
                className="absolute w-[20px] h-[4px] top-[45px] left-[1248px]"
                alt="Shape more"
                src="https://c.animaapp.com/U7DZF6MV/img/shape-more-8.svg"
              />
            </div>
          </div>
          <div className="absolute w-[1333px] h-[94px] top-[258px] left-[107px]">
            <div className="relative h-[94px] bg-primary-cta-text rounded-[3px]">
              <StatusButton
                className="!absolute !left-[41px] !bg-open-bids !top-[33px]"
                divClassName="!text-primary-cta-text !tracking-[var(--inter-regular-14px-letter-spacing)] !text-[length:var(--inter-regular-14px-font-size)] ![font-style:var(--inter-regular-14px-font-style)] !font-[number:var(--inter-regular-14px-font-weight)] !font-inter-regular-14px !leading-[var(--inter-regular-14px-line-height)]"
              />
              <p className="absolute w-[197px] top-[14px] left-[363px] font-inter-regular-16px font-[number:var(--inter-regular-16px-font-weight)] text-primary-text text-[length:var(--inter-regular-16px-font-size)] tracking-[var(--inter-regular-16px-letter-spacing)] leading-[var(--inter-regular-16px-line-height)] [font-style:var(--inter-regular-16px-font-style)]">
                Inflammation
                <br />
                Indication: Back pain
                <br />
                Molecular type: Chemical
              </p>
              <div className="absolute w-[122px] h-[25px] top-[34px] left-[193px]">
                <div className="absolute w-[120px] h-[25px] top-0 left-0 font-inter-regular-16px font-[number:var(--inter-regular-16px-font-weight)] text-primary-text text-[length:var(--inter-regular-16px-font-size)] tracking-[var(--inter-regular-16px-letter-spacing)] leading-[var(--inter-regular-16px-line-height)] [font-style:var(--inter-regular-16px-font-style)]">
                  Second study
                </div>
              </div>
              <div className="absolute w-[113px] top-[23px] left-[1043px] font-inter-regular-16px font-[number:var(--inter-regular-16px-font-weight)] text-primary-text text-[length:var(--inter-regular-16px-font-size)] tracking-[var(--inter-regular-16px-letter-spacing)] leading-[var(--inter-regular-16px-line-height)] [font-style:var(--inter-regular-16px-font-style)]">
                April 19, 2019
                <br />
                07:09:50 am
              </div>
              <div className="w-[100px] top-[38px] left-[885px] font-inter-regular-16px font-[number:var(--inter-regular-16px-font-weight)] text-primary-text text-[length:var(--inter-regular-16px-font-size)] text-right whitespace-nowrap absolute tracking-[var(--inter-regular-16px-letter-spacing)] leading-[var(--inter-regular-16px-line-height)] [font-style:var(--inter-regular-16px-font-style)]">
                1
              </div>
              <div className="absolute w-[106px] top-[27px] left-[613px] font-inter-regular-16px font-[number:var(--inter-regular-16px-font-weight)] text-primary-text text-[length:var(--inter-regular-16px-font-size)] tracking-[var(--inter-regular-16px-letter-spacing)] leading-[var(--inter-regular-16px-line-height)] [font-style:var(--inter-regular-16px-font-style)]">
                ABZ-123
                <br />
                Title: Atest
              </div>
              <div className="absolute top-[38px] left-[809px] font-inter-regular-16px font-[number:var(--inter-regular-16px-font-weight)] text-primary-text text-[length:var(--inter-regular-16px-font-size)] text-right tracking-[var(--inter-regular-16px-letter-spacing)] leading-[var(--inter-regular-16px-line-height)] whitespace-nowrap [font-style:var(--inter-regular-16px-font-style)]">
                II
              </div>
              <img
                className="cursor-pointer absolute w-[20px] h-[4px] top-[45px] left-[1248px]"
                alt="Shape more"
                src="https://c.animaapp.com/U7DZF6MV/img/shape-more-8.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { Fragment } from "react";
import { StatusBar } from "react-native";
import Colors from "../../../constants/colors.json";
import { createStackNavigator } from "@react-navigation/stack";
import { RFValue } from "react-native-responsive-fontsize";

import StartComponent from "./start";
import LoanMainComponent from "./loan";
import LoanDescriptionComponent from "./loan-description";
import InvestmentMainComponent from "./investment";
import FundTransfer from "./fund-transfer";
import FundTransferRequest from "./fund-transfer-request";

import BankAssuranceComponent from "./bank-assurance";
import BankAssuranceQuotationComponent from './request-quotation';

import LoanRequestComponent from "./loan-request";

import CardlessWithdrawalComponent from "./cardless-withdrawal";
import CardlessWithdrawalAgentComponent from "./cash-withdrawal-agent";
import CardlessWithdrawalAtmComponent from "./cash-withdrawal-atm";

import RequestComponent from "./request";

import StandingOrderComponent from "./standing-order";

const Stack = createStackNavigator();

export default function ActivityNavigator() {
  return (
    <Fragment>
      <StatusBar barStyle={"light-content"} />
      <Stack.Navigator initailRoute={"transaction"}>
        <Stack.Screen
          name={"transaction"}
          component={StartComponent}
          options={{
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: Colors.secondary,
              shadowOpacity: 0,
              elevation: 0,
            },
            headerTitleStyle: {
              fontSize: RFValue(18),
            },
            headerTitle: "Services",
            headerTintColor: Colors.white,

            headerLeft: () => {},
          }}
        />
        <Stack.Screen
          name={"loan-main"}
          component={LoanMainComponent}
          options={{
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: Colors.secondary,
              shadowOpacity: 0,
              elevation: 0,
            },
            headerTitle: "",
            headerTintColor: Colors.white,
            headerLeftContainerStyle: {
              marginLeft: RFValue(10),
            },
          }}
        />

        <Stack.Screen
                  name={"bank-assurance-main"}
                  component={BankAssuranceComponent}
                  options={{
                    headerBackTitleVisible: false,
                    headerStyle: {
                      backgroundColor: Colors.secondary,
                      shadowOpacity: 0,
                      elevation: 0,
                    },
                    headerTitle: "",
                    headerTintColor: Colors.white,
                    headerLeftContainerStyle: {
                      marginLeft: RFValue(10),
                    },
                  }}
                />


<Stack.Screen
                  name={"request-quotation"}
                  component={BankAssuranceQuotationComponent}
                  options={{
                    headerBackTitleVisible: false,
                    headerStyle: {
                      backgroundColor: Colors.secondary,
                      shadowOpacity: 0,
                      elevation: 0,
                    },
                    headerTitle: "",
                    headerTintColor: Colors.white,
                    headerLeftContainerStyle: {
                      marginLeft: RFValue(10),
                    },
                  }}
                />

        <Stack.Screen
          name={"investment-main"}
          component={InvestmentMainComponent}
          options={{
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: Colors.secondary,
              shadowOpacity: 0,
              elevation: 0,
            },
            headerTitle: "",
            headerTintColor: Colors.white,
            headerLeftContainerStyle: {
              marginLeft: RFValue(10),
            },
          }}
        />

        <Stack.Screen
          name={"loan-description"}
          component={LoanDescriptionComponent}
          options={{
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: Colors.secondary,
              shadowOpacity: 0,
              elevation: 0,
            },
            headerTitle: "",
            headerTintColor: Colors.white,
            headerLeftContainerStyle: {
              marginLeft: RFValue(10),
            },
          }}
        />

        <Stack.Screen
          name={"fund-transfer"}
          component={FundTransfer}
          options={{
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: Colors.secondary,
              shadowOpacity: 0,
              elevation: 0,
            },
            headerTitle: "",
            headerTintColor: Colors.white,
            headerLeftContainerStyle: {
              marginLeft: RFValue(10),
            },
          }}
        />

        <Stack.Screen
          name={"fund-transfer-request"}
          component={FundTransferRequest}
          options={{
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: Colors.secondary,
              shadowOpacity: 0,
              elevation: 0,
            },
            headerTitle: "",
            headerTintColor: Colors.white,
            headerLeftContainerStyle: {
              marginLeft: RFValue(10),
            },
          }}
        />

        <Stack.Screen
          name={"loan-request"}
          component={LoanRequestComponent}
          options={{
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: Colors.secondary,
              shadowOpacity: 0,
              elevation: 0,
            },
            headerTitle: "",
            headerTintColor: Colors.white,
            headerLeftContainerStyle: {
              marginLeft: RFValue(10),
            },
          }}
        />

        <Stack.Screen
          name={"cardless-withdrawal-main"}
          component={CardlessWithdrawalComponent}
          options={{
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: Colors.secondary,
              shadowOpacity: 0,
              elevation: 0,
            },
            headerTitle: "",
            headerTintColor: Colors.white,
            headerLeftContainerStyle: {
              marginLeft: RFValue(10),
            },
          }}
        />

        <Stack.Screen
          name={"cardless-withdrawal-agent"}
          component={CardlessWithdrawalAgentComponent}
          options={{
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: Colors.secondary,
              shadowOpacity: 0,
              elevation: 0,
            },
            headerTitle: "",
            headerTintColor: Colors.white,
            headerLeftContainerStyle: {
              marginLeft: RFValue(10),
            },
          }}
        />
        <Stack.Screen
          name={"cardless-withdrawal-atm"}
          component={CardlessWithdrawalAtmComponent}
          options={{
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: Colors.secondary,
              shadowOpacity: 0,
              elevation: 0,
            },
            headerTitle: "",
            headerTintColor: Colors.white,
            headerLeftContainerStyle: {
              marginLeft: RFValue(10),
            },
          }}
        />
        <Stack.Screen
          name={"request-main"}
          component={RequestComponent}
          options={{
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: Colors.secondary,
              shadowOpacity: 0,
              elevation: 0,
            },
            headerTitle: "",
            headerTintColor: Colors.white,
            headerLeftContainerStyle: {
              marginLeft: RFValue(10),
            },
          }}
        />

        <Stack.Screen
          name={"standing-order-main"}
          component={StandingOrderComponent}
          options={{
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: Colors.secondary,
              shadowOpacity: 0,
              elevation: 0,
            },
            headerTitle: "",
            headerTintColor: Colors.white,
            headerLeftContainerStyle: {
              marginLeft: RFValue(10),
            },
          }}
        />
      </Stack.Navigator>
    </Fragment>
  );
}

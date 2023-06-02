import { Contract, signer } from "./instance";
import { ethers } from "ethers";

const StakeWIXFun = () => {
  const stakeWix = async (isWalletConnected, amount, plan) => {
    try {
      console.log("Amount ", amount);
      console.log("plan ", plan);
      var amount = ethers.utils.parseUnits(amount.toString(), "ether");
      amount = amount.toString();
      console.log("Amount  in Wie ", amount);
      var { contract_instance, wixContract_instance } = await Contract(
        isWalletConnected
      );

      var selectedPlan;
      if (plan == 1) {
        selectedPlan = (await contract_instance.Plan1()).toString();
        console.log("this is elected Plan 1", selectedPlan);
      } else if (plan == 2) {
        selectedPlan = (await contract_instance.Plan2()).toString();
        console.log("this is elected Plan 2", selectedPlan);
      } else if (plan == 3) {
        selectedPlan = (await contract_instance.Plan3()).toString();
        console.log("this is elected Plan 3", selectedPlan);
      } else if (plan == 4) {
        selectedPlan = (await contract_instance.Plan5()).toString();
        console.log("this is elected Plan 4", selectedPlan);
      } else if (plan == 5) {
        selectedPlan = (await contract_instance.Plan5()).toString();
        console.log("this is elected Plan5", selectedPlan);
      } else if (plan == 6) {
        selectedPlan = (await contract_instance.Plan6()).toString();
        console.log("this is elected Plan 6", selectedPlan);
      }

      const address = await signer.getAddress();
      console.log("address ", address);
      var balance = (await wixContract_instance.balanceOf(address)).toString();

      if (Number(balance) < Number(amount)) {
        return { success: false, msg: "not enough balance" };
      }

      var allowance = (
        await wixContract_instance.allowance(
          address,
          process.env.NEXT_PUBLIC_Contract
        )
      ).toString();

      if (Number(allowance) < Number(amount)) {
        await wixContract_instance.approve(
          process.env.NEXT_PUBLIC_Contract,
          amount
        );
      }

      // contract_instance.stakeTokens(amount, selectedPlan)

      await new Promise((resolve) => {
        return setTimeout(resolve, 10000);
      });

      await contract_instance.stakeTokens(amount, selectedPlan);

      return { success: true, msg: "Wix Stake successfully" };
    } catch (err) {
      console.log("err", err);
      if (err.code == "ACTION_REJECTED") {
        return { success: false, msg: "user rejected transaction" };
      }
        return { success: false, msg: "" };
    }
  };

  // unStake before time

  const unStakeBeforeTimeFun = async (plan) => {
    try {
      var { contract_instance, wixContract_instance } = await Contract(true);

      console.log("this plan ", plan)
      var plan_to_unstake = ""
      if(plan == 1){
        plan_to_unstake = (await contract_instance.Plan1()).toString()
      }else if (plan == 2){
        plan_to_unstake = (await contract_instance.Plan2()).toString()
        
      }else if (plan == 3){
        plan_to_unstake = (await contract_instance.Plan3()).toString()
        
      }else if (plan == 4){
        plan_to_unstake = (await contract_instance.Plan4()).toString()
        
      }else if (plan == 5){
        plan_to_unstake = (await contract_instance.Plan5()).toString()
        
      }else if (plan == 6){
        plan_to_unstake = (await contract_instance.Plan6()).toString()
      }



      console.log("this isplna to unStake", plan_to_unstake)
      

        // const address = await signer.getAddress();
      var { contract_instance, wixContract_instance } = await Contract(true);
        
      await contract_instance.unstakeTokensBeforeTime(plan_to_unstake)
      // console.log("staked Detials is working");

      return {success : true, msg : "Unstaked Successfully"}
      
    } catch (err) {
      console.log('this is error is JSON', err);
      if (err.code == 'ACTION_REJECTED') {
        return { success: false, msg: 'user rejected transaction' };
      }
  
      if (err.error.data) {
        console.log('this property is also working');
        if (err.error.data.code == 3) {
          var msg = err.error.data.message;
          msg = msg.split(':');
          return { success: false, msg: msg[1] };
        }
      }
    }
  };

  // get Staked WIX Detials

  const getStakedDetails = async () => {
    try {
      
    } catch (err) {
      console.log("erro ", err)
    }
  };

  return { stakeWix, unStakeBeforeTimeFun, getStakedDetails };
};

export { StakeWIXFun };

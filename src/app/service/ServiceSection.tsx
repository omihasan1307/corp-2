import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import s1 from "../../../public/about1.jpg";
import s2 from "../../../public/about2.jpg";

const Vision = [
  "Integer consectetur tincidunt.",
  "Fusce lacinia nulla eu nunc sed.",
  "Proin tempus lorem nibh.",
  "Pellentesque id lectus tempor.",
  "Morbi sed volutpat neque et.",
];

const ServiceSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto space-y-20 my-32  ">
      <div className="lg:grid grid-cols-2 place-items-center gap-5 px-2">
        <div className="space-y-5 w-full" data-aos="fade-right">
          <div className="flex items-center space-x-8">
            <div>
              <svg
                id="svg31911"
                className="icon "
                viewBox="0 0 16.933333 16.933334"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="layer1" transform="translate(0 -280.067)">
                  <path
                    id="path13423"
                    d="m3.4390638 280.5958c-.4351496 0-.7932341.35808-.7932341.79324v8.46667c0 .35312.5296827.35312.5296827 0v-6.61304h10.5817826v6.61304c-.008.36078.537268.36078.529167 0v-8.46667c0-.43516-.357555-.79324-.792716-.79324zm0 .52969h10.0546822c.15116 0 .263549.11239.263549.26355v1.32395h-10.5817826v-1.32395c0-.15116.1124003-.26355.2635514-.26355zm.5296826.52865c-.1461293 0-.2645833.11846-.2645833.26458 0 .14613.118454.26458.2645833.26458.1461188 0 .2645834-.11845.2645834-.26458 0-.14612-.1184646-.26458-.2645834-.26458zm1.0583334 0c-.1461188 0-.2645834.11846-.2645834.26458 0 .14613.1184646.26458.2645834.26458.1461294 0 .2645833-.11845.2645833-.26458 0-.14612-.1184539-.26458-.2645833-.26458zm1.0583333 0c-.1461188 0-.2645833.11846-.2645833.26458 0 .14613.1184645.26458.2645833.26458.1461294 0 .2645834-.11845.2645834-.26458 0-.14612-.118454-.26458-.2645834-.26458zm3.6907316.00053c-.35723.0243-.332849.53791.01241.52916h3.1760263c.34504-.008.34504-.52151 0-.52916zm-8.4521972.52916c-.4351602 0-.7947845.35756-.7947845.79272v9.5255c0 .43517.3596243.79324.7947845.79324h14.2869815c.43516 0 .793234-.35807.793234-.79324v-9.52551c0-.43516-.358074-.79272-.793234-.79272h-.529167c-.360688-.008-.360688.53717 0 .52917h.529167c.151162 0 .263552.11239.263552.26355v7.67395h-14.8161513v-7.67395c0-.15116.1144666-.26355.2656178-.26355h.5270976c.3606906.008.3606906-.53717 0-.52917zm7.9395662 2.11202c-.116313-.00079-.219485.0745-.254248.18552l-1.588016 4.76198c-.111967.33487.390329.50282.502295.16795l1.588016-4.76353c.05989-.17133-.06656-.35072-.248047-.35192zm1.1503183 1.52962 1.343586 1.12086-1.343586 1.11932c-.287081.22475.0674.64883.339514.40617l1.585949-1.3224c.126643-.10577.126643-.30039 0-.40617l-1.585949-1.32447c-.04741-.0406-.107622-.0631-.183452-.063-.2501.0219-.340778.32025-.156062.46974zm-4.0705533-.46922c-.059587.002-.1167659.024-.1622637.0625l-1.5875 1.32447c-.1266428.10578-.1266428.3004 0 .40617l1.5875 1.3224c.2730289.25429.6376564-.18393.3379629-.40617l-1.3435859-1.11932 1.3435859-1.12086c.1954953-.16007.076854-.47692-.1756992-.46922zm-5.284949 5.82392h14.8161513v1.32188c0 .15116-.11239.26355-.263552.26355h-14.2869815c-.1511512 0-.2656178-.11239-.2656178-.26355zm7.95197.52865-1.085723.00053c-.337259.0403-.314608.51807.01241.5271h1.058844c.36336.0321.39361-.52033.01447-.52762zm-2.027785 2.09496c-.106199-.002-.203462.0592-.2470124.15607-.1274101.27328-.3556741.59239-.7498239.92294h-.4294319c-.4351603 0-.7927155.36014-.7927155.7953v.5271c-.0005292.14612.11743.26503.2635488.26561h6.8786502c.146929.00053.266177-.11868.265616-.26561v-.5271c0-.43516-.359622-.7953-.794782-.7953h-.428916c-.39411-.33053-.622425-.64968-.749824-.92294-.0448-.0994-.145915-.16112-.2547643-.15555-.189021.01-.307073.20886-.224793.37931.10314.22122.260638.45853.4728393.69918h-3.4488859c.2121906-.24065.3696886-.47796.4728396-.69918.084-.17352-.0398-.37572-.232545-.37983zm-1.4262682 1.60869h5.8203175c.151138 0 .265615.11446.265615.26562v.26355h-6.3494814v-.26355c0-.15116.1123897-.26562.2635489-.26562z"
                    vector-effect="none"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="space-y-2">
              <p className="text-darkBlueColor text-2xl font-bold ">
                Consultation
              </p>
              <p className="text-gray-500 w-96">
                Lorem ipsum dolor sit amet elit. Ut elit tellus luctus
                necmattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-8">
            <div>
              <svg
                id="svg31911"
                className="icon"
                viewBox="0 0 16.933333 16.933334"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="layer1" transform="translate(0 -280.067)">
                  <path
                    id="path13423"
                    d="m3.4390638 280.5958c-.4351496 0-.7932341.35808-.7932341.79324v8.46667c0 .35312.5296827.35312.5296827 0v-6.61304h10.5817826v6.61304c-.008.36078.537268.36078.529167 0v-8.46667c0-.43516-.357555-.79324-.792716-.79324zm0 .52969h10.0546822c.15116 0 .263549.11239.263549.26355v1.32395h-10.5817826v-1.32395c0-.15116.1124003-.26355.2635514-.26355zm.5296826.52865c-.1461293 0-.2645833.11846-.2645833.26458 0 .14613.118454.26458.2645833.26458.1461188 0 .2645834-.11845.2645834-.26458 0-.14612-.1184646-.26458-.2645834-.26458zm1.0583334 0c-.1461188 0-.2645834.11846-.2645834.26458 0 .14613.1184646.26458.2645834.26458.1461294 0 .2645833-.11845.2645833-.26458 0-.14612-.1184539-.26458-.2645833-.26458zm1.0583333 0c-.1461188 0-.2645833.11846-.2645833.26458 0 .14613.1184645.26458.2645833.26458.1461294 0 .2645834-.11845.2645834-.26458 0-.14612-.118454-.26458-.2645834-.26458zm3.6907316.00053c-.35723.0243-.332849.53791.01241.52916h3.1760263c.34504-.008.34504-.52151 0-.52916zm-8.4521972.52916c-.4351602 0-.7947845.35756-.7947845.79272v9.5255c0 .43517.3596243.79324.7947845.79324h14.2869815c.43516 0 .793234-.35807.793234-.79324v-9.52551c0-.43516-.358074-.79272-.793234-.79272h-.529167c-.360688-.008-.360688.53717 0 .52917h.529167c.151162 0 .263552.11239.263552.26355v7.67395h-14.8161513v-7.67395c0-.15116.1144666-.26355.2656178-.26355h.5270976c.3606906.008.3606906-.53717 0-.52917zm7.9395662 2.11202c-.116313-.00079-.219485.0745-.254248.18552l-1.588016 4.76198c-.111967.33487.390329.50282.502295.16795l1.588016-4.76353c.05989-.17133-.06656-.35072-.248047-.35192zm1.1503183 1.52962 1.343586 1.12086-1.343586 1.11932c-.287081.22475.0674.64883.339514.40617l1.585949-1.3224c.126643-.10577.126643-.30039 0-.40617l-1.585949-1.32447c-.04741-.0406-.107622-.0631-.183452-.063-.2501.0219-.340778.32025-.156062.46974zm-4.0705533-.46922c-.059587.002-.1167659.024-.1622637.0625l-1.5875 1.32447c-.1266428.10578-.1266428.3004 0 .40617l1.5875 1.3224c.2730289.25429.6376564-.18393.3379629-.40617l-1.3435859-1.11932 1.3435859-1.12086c.1954953-.16007.076854-.47692-.1756992-.46922zm-5.284949 5.82392h14.8161513v1.32188c0 .15116-.11239.26355-.263552.26355h-14.2869815c-.1511512 0-.2656178-.11239-.2656178-.26355zm7.95197.52865-1.085723.00053c-.337259.0403-.314608.51807.01241.5271h1.058844c.36336.0321.39361-.52033.01447-.52762zm-2.027785 2.09496c-.106199-.002-.203462.0592-.2470124.15607-.1274101.27328-.3556741.59239-.7498239.92294h-.4294319c-.4351603 0-.7927155.36014-.7927155.7953v.5271c-.0005292.14612.11743.26503.2635488.26561h6.8786502c.146929.00053.266177-.11868.265616-.26561v-.5271c0-.43516-.359622-.7953-.794782-.7953h-.428916c-.39411-.33053-.622425-.64968-.749824-.92294-.0448-.0994-.145915-.16112-.2547643-.15555-.189021.01-.307073.20886-.224793.37931.10314.22122.260638.45853.4728393.69918h-3.4488859c.2121906-.24065.3696886-.47796.4728396-.69918.084-.17352-.0398-.37572-.232545-.37983zm-1.4262682 1.60869h5.8203175c.151138 0 .265615.11446.265615.26562v.26355h-6.3494814v-.26355c0-.15116.1123897-.26562.2635489-.26562z"
                    vector-effect="none"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="space-y-2">
              <p className="text-darkBlueColor text-2xl font-bold ">
                Choose Your Material
              </p>
              <p className="text-gray-500 w-96">
                Lorem ipsum dolor sit amet elit. Ut elit tellus luctus
                necmattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-8">
            <div>
              <svg
                id="svg31911"
                className="icon"
                viewBox="0 0 16.933333 16.933334"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="layer1" transform="translate(0 -280.067)">
                  <path
                    id="path13423"
                    d="m3.4390638 280.5958c-.4351496 0-.7932341.35808-.7932341.79324v8.46667c0 .35312.5296827.35312.5296827 0v-6.61304h10.5817826v6.61304c-.008.36078.537268.36078.529167 0v-8.46667c0-.43516-.357555-.79324-.792716-.79324zm0 .52969h10.0546822c.15116 0 .263549.11239.263549.26355v1.32395h-10.5817826v-1.32395c0-.15116.1124003-.26355.2635514-.26355zm.5296826.52865c-.1461293 0-.2645833.11846-.2645833.26458 0 .14613.118454.26458.2645833.26458.1461188 0 .2645834-.11845.2645834-.26458 0-.14612-.1184646-.26458-.2645834-.26458zm1.0583334 0c-.1461188 0-.2645834.11846-.2645834.26458 0 .14613.1184646.26458.2645834.26458.1461294 0 .2645833-.11845.2645833-.26458 0-.14612-.1184539-.26458-.2645833-.26458zm1.0583333 0c-.1461188 0-.2645833.11846-.2645833.26458 0 .14613.1184645.26458.2645833.26458.1461294 0 .2645834-.11845.2645834-.26458 0-.14612-.118454-.26458-.2645834-.26458zm3.6907316.00053c-.35723.0243-.332849.53791.01241.52916h3.1760263c.34504-.008.34504-.52151 0-.52916zm-8.4521972.52916c-.4351602 0-.7947845.35756-.7947845.79272v9.5255c0 .43517.3596243.79324.7947845.79324h14.2869815c.43516 0 .793234-.35807.793234-.79324v-9.52551c0-.43516-.358074-.79272-.793234-.79272h-.529167c-.360688-.008-.360688.53717 0 .52917h.529167c.151162 0 .263552.11239.263552.26355v7.67395h-14.8161513v-7.67395c0-.15116.1144666-.26355.2656178-.26355h.5270976c.3606906.008.3606906-.53717 0-.52917zm7.9395662 2.11202c-.116313-.00079-.219485.0745-.254248.18552l-1.588016 4.76198c-.111967.33487.390329.50282.502295.16795l1.588016-4.76353c.05989-.17133-.06656-.35072-.248047-.35192zm1.1503183 1.52962 1.343586 1.12086-1.343586 1.11932c-.287081.22475.0674.64883.339514.40617l1.585949-1.3224c.126643-.10577.126643-.30039 0-.40617l-1.585949-1.32447c-.04741-.0406-.107622-.0631-.183452-.063-.2501.0219-.340778.32025-.156062.46974zm-4.0705533-.46922c-.059587.002-.1167659.024-.1622637.0625l-1.5875 1.32447c-.1266428.10578-.1266428.3004 0 .40617l1.5875 1.3224c.2730289.25429.6376564-.18393.3379629-.40617l-1.3435859-1.11932 1.3435859-1.12086c.1954953-.16007.076854-.47692-.1756992-.46922zm-5.284949 5.82392h14.8161513v1.32188c0 .15116-.11239.26355-.263552.26355h-14.2869815c-.1511512 0-.2656178-.11239-.2656178-.26355zm7.95197.52865-1.085723.00053c-.337259.0403-.314608.51807.01241.5271h1.058844c.36336.0321.39361-.52033.01447-.52762zm-2.027785 2.09496c-.106199-.002-.203462.0592-.2470124.15607-.1274101.27328-.3556741.59239-.7498239.92294h-.4294319c-.4351603 0-.7927155.36014-.7927155.7953v.5271c-.0005292.14612.11743.26503.2635488.26561h6.8786502c.146929.00053.266177-.11868.265616-.26561v-.5271c0-.43516-.359622-.7953-.794782-.7953h-.428916c-.39411-.33053-.622425-.64968-.749824-.92294-.0448-.0994-.145915-.16112-.2547643-.15555-.189021.01-.307073.20886-.224793.37931.10314.22122.260638.45853.4728393.69918h-3.4488859c.2121906-.24065.3696886-.47796.4728396-.69918.084-.17352-.0398-.37572-.232545-.37983zm-1.4262682 1.60869h5.8203175c.151138 0 .265615.11446.265615.26562v.26355h-6.3494814v-.26355c0-.15116.1123897-.26562.2635489-.26562z"
                    vector-effect="none"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="space-y-2">
              <p className="text-darkBlueColor text-2xl font-bold ">
                Production
              </p>
              <p className="text-gray-500 w-96">
                Lorem ipsum dolor sit amet elit. Ut elit tellus luctus
                necmattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-8">
            <div>
              <svg
                id="svg31911"
                className="icon"
                viewBox="0 0 16.933333 16.933334"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="layer1" transform="translate(0 -280.067)">
                  <path
                    id="path13423"
                    d="m3.4390638 280.5958c-.4351496 0-.7932341.35808-.7932341.79324v8.46667c0 .35312.5296827.35312.5296827 0v-6.61304h10.5817826v6.61304c-.008.36078.537268.36078.529167 0v-8.46667c0-.43516-.357555-.79324-.792716-.79324zm0 .52969h10.0546822c.15116 0 .263549.11239.263549.26355v1.32395h-10.5817826v-1.32395c0-.15116.1124003-.26355.2635514-.26355zm.5296826.52865c-.1461293 0-.2645833.11846-.2645833.26458 0 .14613.118454.26458.2645833.26458.1461188 0 .2645834-.11845.2645834-.26458 0-.14612-.1184646-.26458-.2645834-.26458zm1.0583334 0c-.1461188 0-.2645834.11846-.2645834.26458 0 .14613.1184646.26458.2645834.26458.1461294 0 .2645833-.11845.2645833-.26458 0-.14612-.1184539-.26458-.2645833-.26458zm1.0583333 0c-.1461188 0-.2645833.11846-.2645833.26458 0 .14613.1184645.26458.2645833.26458.1461294 0 .2645834-.11845.2645834-.26458 0-.14612-.118454-.26458-.2645834-.26458zm3.6907316.00053c-.35723.0243-.332849.53791.01241.52916h3.1760263c.34504-.008.34504-.52151 0-.52916zm-8.4521972.52916c-.4351602 0-.7947845.35756-.7947845.79272v9.5255c0 .43517.3596243.79324.7947845.79324h14.2869815c.43516 0 .793234-.35807.793234-.79324v-9.52551c0-.43516-.358074-.79272-.793234-.79272h-.529167c-.360688-.008-.360688.53717 0 .52917h.529167c.151162 0 .263552.11239.263552.26355v7.67395h-14.8161513v-7.67395c0-.15116.1144666-.26355.2656178-.26355h.5270976c.3606906.008.3606906-.53717 0-.52917zm7.9395662 2.11202c-.116313-.00079-.219485.0745-.254248.18552l-1.588016 4.76198c-.111967.33487.390329.50282.502295.16795l1.588016-4.76353c.05989-.17133-.06656-.35072-.248047-.35192zm1.1503183 1.52962 1.343586 1.12086-1.343586 1.11932c-.287081.22475.0674.64883.339514.40617l1.585949-1.3224c.126643-.10577.126643-.30039 0-.40617l-1.585949-1.32447c-.04741-.0406-.107622-.0631-.183452-.063-.2501.0219-.340778.32025-.156062.46974zm-4.0705533-.46922c-.059587.002-.1167659.024-.1622637.0625l-1.5875 1.32447c-.1266428.10578-.1266428.3004 0 .40617l1.5875 1.3224c.2730289.25429.6376564-.18393.3379629-.40617l-1.3435859-1.11932 1.3435859-1.12086c.1954953-.16007.076854-.47692-.1756992-.46922zm-5.284949 5.82392h14.8161513v1.32188c0 .15116-.11239.26355-.263552.26355h-14.2869815c-.1511512 0-.2656178-.11239-.2656178-.26355zm7.95197.52865-1.085723.00053c-.337259.0403-.314608.51807.01241.5271h1.058844c.36336.0321.39361-.52033.01447-.52762zm-2.027785 2.09496c-.106199-.002-.203462.0592-.2470124.15607-.1274101.27328-.3556741.59239-.7498239.92294h-.4294319c-.4351603 0-.7927155.36014-.7927155.7953v.5271c-.0005292.14612.11743.26503.2635488.26561h6.8786502c.146929.00053.266177-.11868.265616-.26561v-.5271c0-.43516-.359622-.7953-.794782-.7953h-.428916c-.39411-.33053-.622425-.64968-.749824-.92294-.0448-.0994-.145915-.16112-.2547643-.15555-.189021.01-.307073.20886-.224793.37931.10314.22122.260638.45853.4728393.69918h-3.4488859c.2121906-.24065.3696886-.47796.4728396-.69918.084-.17352-.0398-.37572-.232545-.37983zm-1.4262682 1.60869h5.8203175c.151138 0 .265615.11446.265615.26562v.26355h-6.3494814v-.26355c0-.15116.1123897-.26562.2635489-.26562z"
                    vector-effect="none"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="space-y-2">
              <p className="text-darkBlueColor text-2xl font-bold ">
                The Final Result
              </p>
              <p className="text-gray-500 w-96">
                Lorem ipsum dolor sit amet elit. Ut elit tellus luctus
                necmattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6" data-aos="fade-left">
          <h1 className=" font-bold  text-basicColor">
            HOW &nbsp;&nbsp;WE &nbsp;&nbsp; WORK
          </h1>
          <h1 className="text-4xl font-bold text-darkBlueColor ">
            Find The Fabric, Enjoy The
            <br />
            <span className="mt-4 inline-block">Process and The Results</span>
          </h1>
          <p className="text-gray-500">
            Phasellus ultricies ex vitae neque placerat porta. Aenean libero
            eros ultrices vel tristique non ut, porta eget dolor. Donec vel
            ipsum imperdiet neque, sit amet porta facilisis elit. Nunc neque
            enim finibus at nisi non, auctor venenatis leo. Sed porta posuere
            nunc id diam ornare, pretium eleifend mi molestie. Fusce feugiat
            tortor malesuada pulvinar sagittis hendrerit purus felis. Vestibulum
            et auctor porttitor lectus sit amet consequat. Pellentesque rutrum
            risus sed sapien.
          </p>
          <p className="text-gray-500">
            Phasellus ultricies ex vitae neque placerat porta. Aenean libero
            eros ultrices vel tristique non, porta eget dolor. Donec vel ipsum
            imperdiet neque, sit amet porta facilisis elit. Nunc neque enim
            finibus at nisi non, auctor venenatis leo.
          </p>
          <button className="px-6 py-3 rounded-lg bg-basicColor text-white">
            Need Help ?
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;

import { Path, Svg, G, Defs, ClipPath, Rect } from "react-native-svg"

const HomeIcon = ({ fillColor }: any) => {
    return (
        <Svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M17.8847 3.73926C17.7598 3.60177 17.6074 3.49191 17.4375 3.41674C17.2676 3.34157 17.0839 3.30273 16.8981 3.30273C16.7123 3.30273 16.5285 3.34157 16.3586 3.41674C16.1887 3.49191 16.0364 3.60177 15.9114 3.73926L3.91141 17.0726C3.73446 17.2634 3.6172 17.5018 3.57409 17.7584C3.53098 18.015 3.5639 18.2786 3.66879 18.5168C3.77369 18.7549 3.94597 18.9571 4.1644 19.0985C4.38283 19.24 4.63787 19.3144 4.89808 19.3126H7.56474V28.6459C7.56474 28.9995 7.70522 29.3387 7.95527 29.5887C8.20532 29.8388 8.54446 29.9793 8.89808 29.9793H24.8981C25.2517 29.9793 25.5908 29.8388 25.8409 29.5887C26.0909 29.3387 26.2314 28.9995 26.2314 28.6459V19.3126H28.8981C29.2517 19.3126 29.5908 19.1721 29.8409 18.9221C30.0909 18.672 30.2314 18.3329 30.2314 17.9793C30.2339 17.6442 30.1101 17.3205 29.8847 17.0726L17.8847 3.73926Z" fill={fillColor} />
        </Svg>
    )
}

const PaymentIcon = ({ fillColor }: any) => {
    return (
        <Svg width="33" height="33" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/Svg">
            <Path d="M18.9608 16.3965H22.8983V14.1465H20.6483V13.0215H18.3983V14.2027C17.7148 14.3415 17.1072 14.7293 16.6936 15.2909C16.2799 15.8525 16.0897 16.5477 16.1598 17.2416C16.2298 17.9356 16.5553 18.5787 17.0729 19.0462C17.5905 19.5137 18.2634 19.7722 18.9608 19.7715H20.0858C20.235 19.7715 20.3781 19.8307 20.4836 19.9362C20.5891 20.0417 20.6483 20.1848 20.6483 20.334C20.6483 20.4832 20.5891 20.6262 20.4836 20.7317C20.3781 20.8372 20.235 20.8965 20.0858 20.8965H16.1483V23.1465H18.3983V24.2715H20.6483V23.0902C21.3319 22.9514 21.9394 22.5636 22.3531 22.0021C22.7668 21.4405 22.957 20.7453 22.8869 20.0513C22.8168 19.3574 22.4914 18.7142 21.9738 18.2468C21.4562 17.7793 20.7833 17.5208 20.0858 17.5215H18.9608C18.8117 17.5215 18.6686 17.4622 18.5631 17.3567C18.4576 17.2512 18.3983 17.1082 18.3983 16.959C18.3983 16.8098 18.4576 16.6667 18.5631 16.5612C18.6686 16.4557 18.8117 16.3965 18.9608 16.3965Z" fill={fillColor} />
            <Path d="M33.0234 15.2715H30.7509C30.7186 14.3827 30.5042 13.5099 30.1211 12.7073C29.7379 11.9046 29.1942 11.1891 28.5234 10.605V6.27148C28.5234 6.06256 28.4653 5.85776 28.3554 5.68004C28.2456 5.50231 28.0884 5.35869 27.9016 5.26525C27.7147 5.17182 27.5055 5.13227 27.2974 5.15103C27.0893 5.16979 26.8906 5.24613 26.7234 5.37148L22.5238 8.52148H17.2734C11.0747 8.52148 6.62756 12.1676 6.08194 17.5215H6.02344C5.72507 17.5215 5.43892 17.403 5.22794 17.192C5.01696 16.981 4.89844 16.6949 4.89844 16.3965V14.1465H2.64844V16.3965C2.64933 17.2913 3.0052 18.1492 3.63794 18.782C4.27068 19.4147 5.12861 19.7706 6.02344 19.7715H6.10219C6.26534 21.2467 6.74477 22.6693 7.50777 23.9423C8.27077 25.2153 9.29938 26.3088 10.5234 27.1481V31.0215C10.5234 31.3199 10.642 31.606 10.8529 31.817C11.0639 32.028 11.3501 32.1465 11.6484 32.1465H16.1484C16.4468 32.1465 16.733 32.028 16.9439 31.817C17.1549 31.606 17.2734 31.3199 17.2734 31.0215V28.7715H20.6484V31.0215C20.6484 31.3199 20.767 31.606 20.9779 31.817C21.1889 32.028 21.4751 32.1465 21.7734 32.1465H26.2734C26.5718 32.1465 26.858 32.028 27.0689 31.817C27.2799 31.606 27.3984 31.3199 27.3984 31.0215V27.2381C28.2111 26.8528 28.9216 26.2817 29.4726 25.5709C30.0235 24.8601 30.3994 24.0295 30.5698 23.1465H33.0234C33.3218 23.1465 33.608 23.028 33.8189 22.817C34.0299 22.606 34.1484 22.3199 34.1484 22.0215V16.3965C34.1484 16.0981 34.0299 15.812 33.8189 15.601C33.608 15.39 33.3218 15.2715 33.0234 15.2715ZM31.8984 20.8965H28.6629C28.3198 23.9936 27.7359 24.8171 25.1484 25.7509V29.8965H22.8984V26.5215H15.0234V29.8965H12.7734V25.8217C11.4188 25.1773 10.276 24.16 9.47899 22.8891C8.68197 21.6183 8.26378 20.1466 8.27344 18.6465C8.27344 13.2071 12.7937 10.7715 17.2734 10.7715H23.2731L26.2734 8.52148V11.6445C28.9937 13.737 28.4256 15.2287 28.5437 17.5215H31.8984V20.8965Z" fill={fillColor} />
        </Svg>
    )
}

const PlusIcon = ({ fillColor }: any) => {
    return (
        <Svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M7.09816 19V0H11.9018V19H7.09816ZM0 11.9018V7.09816H19V11.9018H0Z" fill="white" />
        </Svg>
    )
}

const ContractIcon = ({ fillColor }: any) => {
    return (
        <Svg width="20" height="27" viewBox="0 0 20 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <G clip-path="url(#clip0_272_7917)">
                <Path d="M3.5651 0.646484C1.81849 0.646484 0.398438 2.10391 0.398438 3.89648V23.3965C0.398438 25.1891 1.81849 26.6465 3.5651 26.6465H16.2318C17.9784 26.6465 19.3984 25.1891 19.3984 23.3965V8.77148H13.0651C12.1893 8.77148 11.4818 8.04531 11.4818 7.14648V0.646484H3.5651ZM13.0651 0.646484V7.14648H19.3984L13.0651 0.646484ZM4.35677 3.89648H7.52344C7.95885 3.89648 8.3151 4.26211 8.3151 4.70898C8.3151 5.15586 7.95885 5.52148 7.52344 5.52148H4.35677C3.92135 5.52148 3.5651 5.15586 3.5651 4.70898C3.5651 4.26211 3.92135 3.89648 4.35677 3.89648ZM4.35677 7.14648H7.52344C7.95885 7.14648 8.3151 7.51211 8.3151 7.95898C8.3151 8.40586 7.95885 8.77148 7.52344 8.77148H4.35677C3.92135 8.77148 3.5651 8.40586 3.5651 7.95898C3.5651 7.51211 3.92135 7.14648 4.35677 7.14648ZM7.03854 20.0348C6.73672 21.0656 5.81146 21.7715 4.7625 21.7715H4.35677C3.92135 21.7715 3.5651 21.4059 3.5651 20.959C3.5651 20.5121 3.92135 20.1465 4.35677 20.1465H4.7625C5.1138 20.1465 5.42057 19.9129 5.51953 19.5676L6.25677 17.0539C6.425 16.4801 6.93958 16.084 7.52344 16.084C8.10729 16.084 8.62188 16.475 8.7901 17.0539L9.36406 19.0141C9.73021 18.6992 10.1953 18.5215 10.6901 18.5215C11.4768 18.5215 12.1943 18.9785 12.5456 19.6996L12.7633 20.1465H15.4401C15.8755 20.1465 16.2318 20.5121 16.2318 20.959C16.2318 21.4059 15.8755 21.7715 15.4401 21.7715H12.2734C11.9716 21.7715 11.6995 21.5988 11.5659 21.3246L11.1305 20.4258C11.0464 20.2531 10.8781 20.1465 10.6951 20.1465C10.512 20.1465 10.3388 20.2531 10.2596 20.4258L9.82422 21.3246C9.68073 21.6242 9.36901 21.802 9.0474 21.7715C8.72578 21.741 8.4487 21.5125 8.35964 21.1977L7.52344 18.3691L7.03854 20.0348Z" fill={fillColor} />
            </G>
            <Defs>
                <ClipPath id="clip0_272_7917">
                    <Rect width="19" height="26" fill="white" transform="translate(0.398438 0.646484)" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

const HolidayIcon = ({ fillColor }: any) => {
    return (
        <Svg width="37" height="25" viewBox="0 0 37 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <G clip-path="url(#clip0_272_7921)">
                <Path d="M21.3105 18.8751H23.4015V20.9661H21.3105V18.8751ZM28.5385 18.8751H30.6295V20.9661H28.5385V18.8751ZM26.7845 11.4591V9.36914H23.8865V10.3871L24.9675 11.4601L26.7845 11.4591Z" fill={fillColor} />
                <Path d="M33.9503 22.7594V18.3504H34.6153L35.2333 17.7394L27.9113 10.4174H27.0023V11.6864H24.8723L23.6033 10.4174H20.0873L12.7733 17.7314L13.3913 18.3494H14.3703V22.7584H12.4593C9.60131 20.0244 8.84131 13.8234 9.10831 9.21039L9.15531 9.11639H9.17831C10.4283 9.11639 11.5363 9.72239 12.2263 10.6564L12.2333 10.6664C12.7533 11.3694 13.0663 12.2544 13.0663 13.2114C13.0663 13.8714 12.9183 14.4964 12.6523 15.0554L12.6633 15.0294C13.2214 14.8865 13.7402 14.6199 14.1813 14.2494L14.1753 14.2544C14.6346 13.8546 15.0027 13.3609 15.2548 12.8066C15.5068 12.2523 15.6369 11.6503 15.6363 11.0414C15.6363 10.0864 15.3223 9.2054 14.7923 8.4954L14.8003 8.5064C14.3456 7.87224 13.7024 7.39762 12.9624 7.15004C12.2224 6.90247 11.4231 6.89454 10.6783 7.1274L10.7043 7.1204C10.9693 6.9554 11.2743 6.8094 11.5953 6.6984L11.6273 6.6884C12.0636 6.52725 12.5252 6.44562 12.9903 6.4474C14.0733 6.4474 15.0543 6.8804 15.7713 7.5814L15.7703 7.5804C15.8766 7.01951 15.8446 6.44118 15.6773 5.8954L15.6843 5.9204C15.5185 5.43401 15.2554 4.98647 14.9111 4.60504C14.5667 4.22361 14.1483 3.91627 13.6814 3.70174C13.2144 3.48722 12.7087 3.36999 12.195 3.35721C11.6813 3.34443 11.1704 3.43636 10.6933 3.6274L10.7183 3.6184C10.477 3.70157 10.2423 3.80286 10.0163 3.9214L10.0453 3.9074C9.97722 3.59465 9.87633 3.28997 9.74431 2.9984L9.75631 3.0274C8.87631 1.0544 6.85831 0.122396 5.24531 0.937395C4.80971 1.16009 4.43543 1.4863 4.15531 1.8874L4.14931 1.8974C4.71702 1.9531 5.26387 2.14059 5.74633 2.44492C6.22879 2.74926 6.63353 3.16204 6.92831 3.6504L6.93731 3.6664C6.56312 3.47906 6.16708 3.33899 5.75831 3.2494L5.72431 3.2434C3.24431 2.7104 0.884314 4.0574 0.461314 6.2584C0.34829 6.86218 0.385726 7.48451 0.570314 8.0704L0.563314 8.0444C1.11787 7.41482 1.8356 6.95072 2.63728 6.70331C3.43896 6.45591 4.29341 6.43483 5.10631 6.6424L5.07431 6.6354C5.48331 6.7214 5.84531 6.8454 6.18431 7.0084L6.15531 6.9954C5.34399 6.88731 4.51888 7.02369 3.78549 7.38709C3.0521 7.75049 2.44377 8.32439 2.03831 9.03539L2.02731 9.0554C1.60398 9.76855 1.38178 10.5831 1.38431 11.4124C1.38431 12.9804 2.16131 14.3664 3.35231 15.2064L3.36731 15.2164C3.8798 15.5605 4.46452 15.7822 5.07631 15.8644L5.09731 15.8664C4.65612 15.1354 4.42402 14.2972 4.42631 13.4434C4.42631 12.5704 4.66331 11.7524 5.07731 11.0514L5.06531 11.0734C5.37287 10.538 5.79458 10.077 6.30046 9.72303C6.80634 9.36907 7.38398 9.13088 7.99231 9.0254L8.01731 9.02139C6.60031 15.4744 6.20831 19.9704 7.37731 22.7574H3.97131V24.6374H36.1193V22.7574H33.9503V22.7594ZM26.0003 18.4524H33.1663V22.7594H26.0003V18.4524ZM15.1393 17.5984L20.0893 12.6484L25.0393 17.5984V22.7594H19.6043V18.8754H16.8553V22.7594H15.1333V17.5984H15.1393Z" fill={fillColor} />
            </G>
            <Defs>
                <ClipPath id="clip0_272_7921">
                    <Rect width="36" height="24" fill="white" transform="translate(0.398438 0.646484)" />
                </ClipPath>
            </Defs>
        </Svg>

    )
}
export { HomeIcon, PaymentIcon, PlusIcon, ContractIcon, HolidayIcon }
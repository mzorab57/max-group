import interior from "../assets/villa/exterior/entrance/v13.jpg";
import vera from "../assets/vera/m24.jpg";
import maxFurnishingImage from "../assets/furnishing/f10.jpg";
import implementationImage from "../assets/house/one/exterior/m32.webp";
import realEstate from "../assets/house/two/exterior/max 9.jpg";
import marbleStonesImage from "../assets/villa/interior/bathroom/v1.jpg";
import { useTranslation } from "react-i18next";

export const cardData = () => {
  const { t } = useTranslation();

  return [
    {
      id: 1,
      titleKey: t("maxDesign"),
      image: interior,
      sections: [
        {
          tagKey: t("interiorDesign"),
          headingKey: t("craftingInspiringSpaces"),
          description: t("createStunningInteriors"),
        },
        {
          tagKey: t("exteriorDesign"),
          headingKey: t("elevatingExteriors"),
          description: t("bringBeauty"),
        },
      ],
      link: "/services/engineering",
    },
    {
      id: 2,
      titleKey: t("maxFurnishing"),
      image: maxFurnishingImage,
      sections: [
        {
          tagKey: t("furnitureDesign"),
          headingKey: t("stylishComfort"),
          description: t("curatedSelection"),
        },
        {
          tagKey: t("customSolutions"),
          headingKey: t("customFurniture"),
          description: t("tailoredToYourNeeds"),
        },
      ],
      link: "/services/furnishing",
    },
    {
      id: 8,
      titleKey: t("vera"),
      image: vera,
      sections: [
        {
          tagKey: t("laurer_details"),
          headingKey: t("beauty_of_laurers"),
          descriptionKey: t("laurers_description")
        },
        {
          tagKey: t("baseboard_options"),
          headingKey: t("enhance_your_space"),
          descriptionKey: t("baseboard_description")
        },
        {
          tagKey: t("classic_molding"),
          headingKey: t("elegance_of_classic"),
          descriptionKey: t("classic_molding_description")
        }
      ],
      link: "/services/vera"
    },
    {
      id: 3,
      titleKey: t("maxConstruction"),
      image: implementationImage,
      sections: [
        {
          tagKey: t("projectManagement"),
          headingKey: t("efficientExecution"),
          descriptionKey: t("seamlessProcess")
        },
        {
          tagKey: t("qualityControl"),
          headingKey: t("highestStandards"),
          descriptionKey: t("meticulousProcesses")
        }
      ],
      link: "/services/real-estate"
    },
   
    {
      id: 5,
      titleKey: t("max_real_estate"),
      image: realEstate,
      sections: [
        {
          tagKey: t("property_development"),
          headingKey: t("premium_locations"),
          descriptionKey: t("exclusive_properties")
        },
        {
          tagKey: t("real_estate_management"),
          headingKey: t("exceptional_service"),
          descriptionKey: t("trusted_experts")
        }
      ],
      link: "/services/engineering"
    }
  ];
};

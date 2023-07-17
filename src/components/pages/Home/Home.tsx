import React from "react";

import { PageWrapper } from "../../atoms/PageWrapper/PageWrapper";
import { PageContentColumn } from "../../atoms/PageContentColumn/PageContentColumn";
import { TitleTypedSubtext } from "../../organisms/TitleTypedSubtext/TitleTypedSubtext";
import { LinkButton } from "../../molecules/Button/Button";
import { VStack } from "../../atoms/VStack/VStack";

export const Home: React.FC = () => {
  return (
    <PageWrapper>
      <PageContentColumn $mobileAlignItems="flex-end">
        <TitleTypedSubtext
          title="PetPost"
          iconName="hamster"
          typedSubtext="Log in or sign up to connect with your pals!"
          minMobileHeight={110}
        />
      </PageContentColumn>
      <PageContentColumn $mobileAlignItems="flex-start" $background="offWhite">
        <VStack $spacing={20} $width="auto">
          <LinkButton $variant="blue" to="signup">
            Sign up
          </LinkButton>
          <LinkButton $variant="textBlue" to="login">
            Log in
          </LinkButton>
        </VStack>
      </PageContentColumn>
    </PageWrapper>
  );
};

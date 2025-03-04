import React from "react";

// import ChevronLeftRounded from "@mui/icons-material/ChevronLeftRounded";
// import MenuRounded from "@mui/icons-material/MenuRounded";

import Box from "@mui/material/Box";
import {
    applyEdgeSidebarStyles,
    EdgeSidebar,
    EdgeSidebarContent,
    Footer,
    Header,
    Root,
} from "../mui-treasury/layout-core-v6";
import { Link as TanStackLink } from "@tanstack/react-router";
import { Breadcrumbs, type Theme } from "@mui/material";

export function Dashboard({ children }: { children: React.ReactNode }) {
    // const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    // const isMediumScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));
    // const trigger = useScrollTrigger({
    //     threshold: 0,
    //     disableHysteresis: true,
    // });


    return (
        <Root>
            <Header>
                <Breadcrumbs >
                    <TanStackLink to="/">
                        MUI
                    </TanStackLink>

                </Breadcrumbs >
            </Header>
            {/* {isSmallScreen || isMediumScreen ? (
                <Header
                    sx={{
                        mb: 4,
                        height: { xs: 48, sm: 64, md: 60 },
                        bgcolor: "rgba(255,255,255,0.5)",
                        backdropFilter: "blur(12px)",
                        ...(trigger && {
                            transition: "0.2s",
                            boxShadow: `0 0 4px 0 ${theme.palette.grey[200]}`,
                            "&:before": {
                                content: '""',
                                position: "absolute",
                                display: "block",
                                width: "100%",
                                height: "1px",
                                bgcolor: "grey.200",
                                bottom: 0,
                            },
                        }),
                    }}
                >
                    <Box
                        sx={{
                            px: { xs: 1, md: 2.5 },
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            height: { xs: 52, sm: 64, md: 72 },
                        }}
                    >
                        <IconButton
                            className={layoutClasses.TemporaryEdgeSidebarTrigger}
                            onClick={() => toggleTemporaryEdgeSidebar()}
                        >
                            <Menu />
                        </IconButton>

                        <IconButton
                            className={layoutClasses.EdgeSidebarCollapser}
                            onClick={(event: React.MouseEvent<HTMLButtonElement>) => toggleEdgeSidebarCollapse({ event })}
                            sx={{
                                marginLeft:
                                    "var(--uncollapsed, max(0px, (1px - var(--EdgeSidebar-permanentWidth)) * 160))",
                                transition: "margin-left 0.3s",
                            }}
                        >
                            <Menu
                                className={layoutClasses.EdgeSidebarCollapsedVisible}
                            />
                            <ChevronLeft
                                className={layoutClasses.EdgeSidebarUncollapsedVisible}
                            />
                        </IconButton>

                        <Typography
                            variant="h6"
                            sx={{ fontSize: "clamp(18px, 1vw + 1rem, 24px)" }}
                        >
                            <b>Analytics</b>
                        </Typography>
                    </Box>
                </Header>
            ) : (
                null
            )} */}
            <EdgeSidebar
                sx={(theme: Theme) => ({
                    ...applyEdgeSidebarStyles({
                        theme,
                        config: {
                            xs: {
                                variant: "temporary",
                                width: "260px",
                            },
                            md: {
                                variant: "persistent",
                                persistentBehavior: "none",
                                width: "160px",
                            },
                            lg: {
                                variant: "permanent",
                                width: "160px",
                                collapsedWidth: "160px",
                                // variant: "persistent",
                                // persistentBehavior: "none",
                                // autoCollapse: "xl",
                                // variant: "permanent",
                                // width: "300px",
                                // collapsedWidth: "80px",
                                // expandOnHover: false,
                                // autoCollapse: "xl",
                            },
                        },
                    }),
                })}
            >
                {/* <EdgeTemporaryClose /> */}

                <EdgeSidebarContent>
                    {/* <SideNavUserInfoMockup /> */}
                    <Box
                        sx={{
                            // borderTop: "1px solid",
                            // borderColor: "grey.200",
                            display: "flex",
                            flexGrow: 1,
                            height: "100%",
                            width: "100%",
                        }}
                    >
                        {/* <IconNavMockup size="small" sx={{ width: '80px' }} /> */}
                        {/* <LinkNavMockup /> */}

                    </Box>
                </EdgeSidebarContent>
            </EdgeSidebar>
            {children}
            <Footer >
                Hello world
            </Footer>
            {/* <Content>
        <Box
          sx={{
            height: "16vh",
            minHeight: 240,
            borderRadius: 2,
            bgcolor: "rgba(0 0 0 / 0.12)",
            m: 2,
          }}
        />
        <Box sx={{ px: 2 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6, md: 8 }} container spacing={2}>
              <Grid size={{ xs: 6 }}>
                <StatCardMockup />
              </Grid>
              <Grid size={{ xs: 6 }}>
                <StatCardMockup />
              </Grid>
              <Grid size={{ xs: 6 }}>
                <StatCardMockup />
              </Grid>
              <Grid size={{ xs: 6 }}>
                <StatCardMockup />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <UserActiveCardMockup />
              </Grid>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <TopUsersCardMockup sx={{ height: "100%" }} />
            </Grid>
          </Grid>
        </Box>
        <br />
        <br />
        <br />
      </Content> */}
        </Root>
    );
}

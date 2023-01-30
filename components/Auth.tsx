import { useSupabaseClient } from "@supabase/auth-helpers-react";
import {
  Auth as SupabaseAuthComponent,
  ThemeSupa,
} from "@supabase/auth-ui-react";

export const Auth = () => {
  const supabaseClient = useSupabaseClient();

  return (
    <SupabaseAuthComponent
      supabaseClient={supabaseClient}
      appearance={{
        theme: ThemeSupa,
        className: {
          container: "w-full max-w-sm md:max-w-md mx-auto",
        },
        style: {
          container: {
            marginRight: "auto",
            marginLeft: "auto",
          },
        },
      }}
      localization={{
        lang: "ja",
      }}
    />
  );
};

export default Auth;
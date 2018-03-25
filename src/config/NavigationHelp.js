import { NavigationActions } from 'react-navigation';

// Stateless component
export function  handleResetNavigation(navigation,routeName) {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: routeName})
      ]
    })
    return () => navigation.dispatch(resetAction)
  }

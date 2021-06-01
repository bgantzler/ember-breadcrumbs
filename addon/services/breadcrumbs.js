import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { cached, tracked } from '@glimmer/tracking';
import { isPresent } from '@ember/utils';

class Breadcrumb {
  @tracked
  title;

  routeName;
  routeLocalName;
  allParams;
  allQueryParams;
  routeParams;
  routeQueryParams;
}

/**
 * cant have two breadcrumbs on same route
 * cant dynamically change the the title
 */
export default class BreadcrumbsMetaService extends Service {
  @service() router;

  @cached
  get crumbs() {
    let parents = (route) => {
      return route ? [...parents(route.parent), route] : [];
    };
    // let params = (params, routeInfo, propName) => {
    //   let params = [];
    //   routes.forEach((route) => {
    //     params.push(route[propName]);
    //   });
    //   return params;
    // };

    let params = [];
    let crumbs = parents(this.router.currentRoute)
      .filter((routeInfo) => {
        return routeInfo.metadata?.breadcrumb;
      })
      .map((routeInfo) => {
        let breadcrumb = new Breadcrumb();
        if (isPresent(routeInfo.paramNames)) {
          params.push(routeInfo.attributes);
        }
        Object.assign(
          breadcrumb,
          {
            title: routeInfo.localName,
          },
          routeInfo.metadata.breadcrumb || {},
          {
            routeName: routeInfo.name,
            routeLocalName: routeInfo.localName,
            allParams: [...params], //params(routeInfo, 'params'),
            allQueryParams: [], // params(routeInfo, 'queryParams'),
            routeParams: routeInfo.params,
            routeQueryParams: routeInfo.queryParams,
          }
        );
        return breadcrumb;
      });

    return crumbs;
  }

  /**
   * Given a route local name, find crumbs starting at
   * @param routeName
   * @returns {Array[Breadcrumb]}
   */
  crumbsAtLocalRouteName(routeLocalName) {
    if (routeLocalName) {
      return this.crumbs;
    } else {
      return this.crumbs;
    }
  }

  /**
   * Given a full route name, find crumbs starting at
   * @param fullRouteName
   * @returns {Array[Breadcrumb]}
   */
  crumbsAtRouteName(routeName) {
    if (routeName) {
      return this.crumbs;
    } else {
      return this.crumbs;
    }
  }
}

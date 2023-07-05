import ViewProps from "../view/view.props";

export default interface BreadcrumbsProps extends ViewProps {
    /** The name of one of the Breadcrumbs presets. */
    preset?: string;

    path?: {title: string, path: string};
}

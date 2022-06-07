import React, { useMemo } from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import FolderIcon from '@mui/icons-material/Folder';
import HttpIcon from '@mui/icons-material/Http';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { TreeNode } from './Tree';
import clsx from 'clsx';
import {
    useTreeItem,
    TreeItemContentProps,
} from '@mui/lab/TreeItem';
import Typography from '@mui/material/Typography';

type Props = {
    node: TreeNode
    selected: boolean
    onAdd: (id: string, type: 0 | 1) => void
    onDel: (id: string) => void
}

const CustomContent = React.forwardRef(function CustomContent(
    props: TreeItemContentProps & Props,
    ref,
) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation()
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const {
        classes,
        className,
        label,
        nodeId,
        icon: iconProp,
        expansionIcon,
        displayIcon,
    } = props;

    const {
        disabled,
        expanded,
        selected,
        focused,
        handleExpansion,
        handleSelection,
        preventSelection,
    } = useTreeItem(nodeId);

    const icon = iconProp || expansionIcon || displayIcon;

    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        preventSelection(event);
    };

    const handleExpansionClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    ) => {
        handleExpansion(event);
    };

    const handleSelectionClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    ) => {
        handleSelection(event);
    };

    const titleIcon = useMemo(() => {
        return props.node.type === 0
            ? <FolderIcon style={{ color: '#e9cb40', marginRight: '8px' }} />
            : <HttpIcon style={{ color: '#1890ff', marginRight: '8px' }} />
    }, [props.node.type])

    return (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div
            className={clsx(className, classes.root, {
                [classes.expanded]: expanded,
                [classes.selected]: selected,
                [classes.focused]: focused,
                [classes.disabled]: disabled,
            })}
            onMouseDown={handleMouseDown}
            ref={ref as React.Ref<HTMLDivElement>}
        >
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
            <div onClick={handleExpansionClick} className={classes.iconContainer}>
                {icon}
            </div>
            <Typography
                onClick={handleSelectionClick}
                component="div"
                className={classes.label}
                style={{ height: '42px', display: 'flex', alignItems: 'center' }}
            >
                {titleIcon}
                <span>{label}</span>
            </Typography>
            {
                props.selected
                    ? <React.Fragment>
                        <Tooltip title="更多操作">
                            <IconButton
                                onClick={handleClick}
                                size="small"
                                sx={{ ml: 2 }}
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                            >
                                <MoreVertIcon />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            anchorEl={anchorEl}
                            id="account-menu"
                            open={open}
                            onClose={handleClose}
                            onClick={handleClose}
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&:before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                            {props.node.type === 0
                                ? <React.Fragment>
                                    <MenuItem onClick={() => props.onAdd(props.node.id, 0)}>
                                        <ListItemIcon>
                                            <AddIcon fontSize="small" />
                                        </ListItemIcon>
                                        新增目录
                                    </MenuItem>
                                    <MenuItem onClick={() => props.onAdd(props.node.id, 1)}>
                                        <ListItemIcon>
                                            <AddIcon fontSize="small" />
                                        </ListItemIcon>
                                        新增请求
                                    </MenuItem>
                                </React.Fragment>
                                : null
                            }
                            <MenuItem onClick={() => props.onDel(props.node.id)}>
                                <ListItemIcon>
                                    <DeleteIcon fontSize="small" />
                                </ListItemIcon>
                                删除节点
                            </MenuItem>
                        </Menu>
                    </React.Fragment>
                    : null
            }
        </div>
    );
});

export default CustomContent
